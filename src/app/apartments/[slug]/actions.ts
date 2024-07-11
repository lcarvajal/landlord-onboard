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

  const { error: updateError } = await supabase
    .from('rooms')
    .update({
      name: formData.get('name') as string,
      equipment: formData.get('equipment') as string,
      size: parseInt(formData.get('size') as string)
    })
    .eq('id', formData.get('room_id') as string)

  // FIX ME: - Handle error
  console.log(updateError)
  if (updateError) throw updateError;

  revalidatePath(`/apartments/${formData.get('apartment_id')}`, 'layout')
  redirect(`/apartments/${formData.get('apartment_id')}`)
}