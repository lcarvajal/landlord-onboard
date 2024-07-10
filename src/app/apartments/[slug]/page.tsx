import { Database } from '@/utils/supabase/database.types'
import { createClient } from '@/utils/supabase/server'
import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'

export default async function Apartment({ params }: { params: { slug: string } }) {
  const supabase = createClient<Database>()

  const apartmentQuery = supabase
    .from("apartments")
    .select(`
      id,
      created_at,
      name,
      location,
      price,
      currency,
      description
        `
    )
    .eq('id', params.slug)
    .limit(1)
    .single();
  type Apartment = QueryData<typeof apartmentQuery>;

  const { data, error } = await apartmentQuery;
  if (error) throw error;
  console.log(data);
  const apartment: Apartment = data;

  return (
    <main>
      <h1>{params.slug}</h1>
      <p>{apartment.name}</p>
      <p>{apartment.price}</p>
    </main>
  )
}