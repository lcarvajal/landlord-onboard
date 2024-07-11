import { createClient } from '@/utils/supabase/server'
import { QueryData } from '@supabase/supabase-js'

export default async function Apartment({ params }: { params: { slug: string } }) {
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
    .eq('id', params.slug)
    .limit(1)
    .single();
  type Apartment = QueryData<typeof apartmentQuery>;

  const { data, error } = await apartmentQuery;
  if (error) throw error;
  const apartment: Apartment = data;

  return (
    <main className="h-screen flex flex-col items-center p-12">
      <div className="text-center mb-6">
        <h1 className="text-3xl">{apartment.name}</h1>
        <h2 className="text-xl">Rooms available at {apartment.location}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {
          apartment.rooms.map((room, index) => (
            <div key={room.id}>
              <p>Room {index + 1}</p>
              <form>
                <label htmlFor="name">Room name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                />
                <label htmlFor="price">Rent price per month in € Euros:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  required
                  min={1}
                />
                <label htmlFor="size">Size in square meters:</label>
                <input
                  type="number"
                  id="size"
                  name="size"
                  min={1}
                  required
                />
                <label htmlFor="equipment">Equipment:</label>
                <input
                  className="mb-6"
                  type="text"
                  id="equipment"
                  name="equipment"
                  required
                />
                <button className="primary-button">Update</button>
              </form>
            </div>
          ))
        }
      </div>
    </main>
  )
}