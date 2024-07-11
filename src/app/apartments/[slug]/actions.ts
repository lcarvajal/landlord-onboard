'use server'

import { createClient } from '@/utils/supabase/server'
import { QueryData } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function getApartment(id: string) {
  const supabase = createClient()

  const apartmentQuery = supabase
    .from("apartments")
    .select(`
      id,
      created_at,
      name,
      location,
      price,
      currency,
      description,
      rooms: rooms(*)
        `
    )
    .order('created_at', { referencedTable: 'rooms', ascending: true })
    .eq('id', id)
    .limit(1)
    .single();
  type Apartment = QueryData<typeof apartmentQuery>;

  // FIX ME: - Handle error
  const { data, error } = await apartmentQuery;
  if (error) throw error;

  const apartment: Apartment = data;
  return apartment
}

export async function updateRoom(formData: FormData) {
  const supabase = createClient()

  const { data: authData, error: authError } = await supabase.auth.getUser()
  if (authError || !authData?.user) {
    redirect('/login')
  }

  const roomId = formData.get('room_id') as string

  const imageFile = formData.get('image') as File
  if (imageFile) {
    console.log("image uploading!")

    const { data: imageData, error: imageError } = await supabase
      .storage
      .from('room-images')
      .upload(`private/${roomId}`, imageFile, {
        cacheControl: '3600',
        upsert: true
      })

    // FIX ME: - Handle error
    if (imageError) throw imageError

    const { error: updateRoomImageError } = await supabase
      .from('rooms')
      .update({
        image_url: imageData.fullPath
      })
      .eq('id', roomId)

    // FIX ME: - Handle error
    if (updateRoomImageError) throw updateRoomImageError
  }

  const { error: updateError } = await supabase
    .from('rooms')
    .update({
      name: formData.get('name') as string,
      equipment: formData.get('equipment') as string,
      size: parseInt(formData.get('size') as string)
    })
    .eq('id', roomId)

  // FIX ME: - Handle error
  console.log(updateError)
  if (updateError) throw updateError;

  revalidatePath(`/apartments/${formData.get('apartment_id')}`, 'layout')
  redirect(`/apartments/${formData.get('apartment_id')}`)
}

export async function navigateHome() {
  revalidatePath('/', 'layout')
  redirect('/')
}