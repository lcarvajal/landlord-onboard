'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createApartment(formData: FormData) {
  const supabase = createClient()

  const { data: authData, error: authError } = await supabase.auth.getUser()
  if (authError || !authData?.user) {
    redirect('/login')
  }

  const { data: insertApartmentData, error: insertApartmentError } = await supabase
    .from('apartments')
    .insert([{
      user_id: authData.user.id,
      name: formData.get('name') as string,
      location: formData.get('location') as string,
    },])
    .select()

  if (insertApartmentError) {
    console.log(insertApartmentError)
    redirect('/error')
  }

  const numberOfRoomsValue = formData.get('numberOfRooms') as string
  const numberOfRooms = parseInt(numberOfRoomsValue)

  for (let i = 0; i < numberOfRooms; i++) {
    const { data: insertRoomData, error: insertRoomError } = await supabase
      .from('rooms')
      .insert([{
        apartment_id: insertApartmentData[0].id,
      },])
      .select()

    if (insertRoomError) {
      console.log(insertRoomError)
      redirect('/error')
    }
  }

  redirect(`/apartments/${insertApartmentData[0].id}`)
}
