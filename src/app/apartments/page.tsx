import Link from 'next/link'
import { Database } from '@/utils/supabase/database.types'
import { createClient } from '@/utils/supabase/server'
import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'

export default async function Apartments() {
  const supabase = createClient<Database>()

  const apartmentsQuery = supabase
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
    );
  type Apartments = QueryData<typeof apartmentsQuery>;

  const { data, error } = await apartmentsQuery;
  if (error) throw error;
  console.log(data);
  const apartments: Apartments = data;

  return (
    <main className="container mx-auto flex flex-col items-center h-screen w-screen">
      <div className="w-full p-6">
        <h1 className="text-4xl font-medium">Your Listings</h1>
      </div>
      <div className="p-6 grow w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apartments.map(apartment => (
          <div key={apartment.id} className="image-container relative rounded-xl overflow-hidden aspect-square">
            <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObXdJytVLoBt-NHn1FQ0TmYolYopCq3hAJw&s" />
            <div className="text-overlay absolute left-0  top-0 bottom-0 right-0 shadow-[inset_0_0_4em_0.8em_rgba(0,0,0,0.8)]">
            </div>
            <div className="p-2 text-overlay absolute left-0 top-0 ">
              {/* {apartment.rooms.length} */}
              <p className="bg-violet-800 px-2 text-white rounded-full"> 2 rooms open</p>
            </div>
            <div className="p-2 absolute left-0 bottom-0 text-white">
              <h1 className="text-xl">{apartment.location}</h1>
              <p>{apartment.location}</p>
            </div>
          </div>
        ))}
        <div key={apartments.length} className="border-2 border-gray-200 rounded-xl overflow-hidden aspect-square">
          <Link className="flex w-full h-full items-center justify-center" href="/apartments/new">
            <div className="text-white text-center transform -translate-y-4">
              <h1 className="text-9xl">+</h1>
              <h1 className="text-xl">New listing</h1>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
