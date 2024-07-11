import { Bottombar } from "@/app/components/layout";
import { getApartment, updateRoom, navigateHome } from "./actions";

export default async function Apartment({ params }: { params: { slug: string } }) {
  const apartment = await getApartment(params.slug);

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
              <form id={`room-${room.id}`}>
                <input
                  type="hidden"
                  name="apartment_id"
                  value={apartment.id}
                />
                <input
                  type="hidden"
                  name="room_id"
                  value={room.id}
                />
                <label htmlFor="name">Room name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={room.name as string}
                  required
                />
                <label htmlFor="size">Size in square meters:</label>
                <input
                  type="number"
                  id="size"
                  name="size"
                  value={room.size as number}
                  min={1}
                  required
                />
                <label htmlFor="equipment">Equipment:</label>
                <input
                  className="mb-6"
                  type="text"
                  id="equipment"
                  name="equipment"
                  value={room.equipment as string}
                  required
                />
                <button className="primary-button" formAction={updateRoom}>Update</button>
              </form>
            </div>
          ))
        }
      </div>
      <Bottombar formId="n/a" buttonTitle="Complete" buttonAction={navigateHome} />
    </main>
  )
}