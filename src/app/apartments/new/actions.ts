'use server'

import { createClient } from '@/utils/supabase/server'
import { Database } from '@/utils/supabase/database.types'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createApartment(formData: FormData) {
  const supabase = createClient<Database>()

  const { data: authData, error: authError } = await supabase.auth.getUser()
  if (authError || !authData?.user) {
    redirect('/login')
  }

  const { data: insertData, error: insertError } = await supabase
    .from('apartments')
    .insert([{
      user_id: authData.user.id,
      name: formData.get('name') as string,
      location: formData.get('location') as string,
    },])
    .select()

  if (insertError) {
    console.log(insertError)
    redirect('/error')
  }

  revalidatePath('/apartments', 'layout')
  redirect('/apartments')
}
