import { createClient } from '@/utils/supabase/server'
import { QueryData } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'

export async function getApartments() {
  const supabase = createClient()
  const { data: authData, error: authError } = await supabase.auth.getUser()
  if (authError || !authData?.user) {
    redirect('/login')
  }

  const apartmentsQuery = supabase
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
    .eq('user_id', authData.user.id);
  type Apartments = QueryData<typeof apartmentsQuery>;

  const { data, error } = await apartmentsQuery;
  if (error) throw error;
  console.log(data);

  const apartments: Apartments = data;
  return apartments;
}