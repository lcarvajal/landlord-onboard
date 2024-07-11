import { Bottombar } from "@/app/components/layout";
import { getApartment, updateRoom, navigateHome } from "./actions";
import Image from "next/image";

export default async function Apartment({ params }: { params: { slug: string } }) {
  const apartment = await getApartment(params.slug);

  return (
    <>
      <main className="h-screen flex flex-col items-center py-6 px-12">
        <div className="text-center mb-3">
          <h1 className="text-3xl">{apartment.name}</h1>
          <h2 className="text-xl">{apartment.location}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {
            apartment.rooms.map((room, index) => (
              <div className="flex flex-col items-center" key={room.id}>
                <p className="w-full text-left">Room {index + 1}</p>
                <form id={`room-${room.id}`}>
                  {room.image_url && <Image className="max-h-24 object-scale-down" src={`https://utmxzqgmamtmrrxbygqb.supabase.co/storage/v1/object/public/${room.image_url}`} alt={room.name ? room.name : "image of room"} width={200} height={200} />}
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
                    type="text"
                    id="equipment"
                    name="equipment"
                    value={room.equipment as string}
                    required
                  />
                  <label htmlFor="image">Image:</label>
                  <input className="mb-6" type="file" name="image" id="image" accept="image/*" />
                  <button className="primary-button" formAction={updateRoom}>Update</button>
                </form>
              </div>
            ))
          }
        </div>
      </main>
      <Bottombar formId="n/a" buttonTitle="Done" buttonAction={navigateHome} />
    </>
  )
}