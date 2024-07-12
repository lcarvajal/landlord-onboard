import { Bottombar } from "@/app/components/navigation";
import { getApartment, navigateHome } from "./actions";
import RoomForm from "./roomForm";

export default async function Apartment({ params }: { params: { slug: string } }) {
  const apartment = await getApartment(params.slug);

  return (
    <>
      <main className="flex flex-col grow items-center py-6 px-12">
        <div className="text-center mb-3">
          <h1 className="text-3xl">{apartment.name}</h1>
          <h2 className="text-xl">{apartment.location}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {
            apartment.rooms.map((room, index) => (
              <div className="flex flex-col items-center" key={room.id}>
                <p className="w-full text-left">Room {index + 1}</p>
                <RoomForm room={room} apartmentId={apartment.id} />
              </div>
            ))
          }
        </div>
      </main>
      <Bottombar formId={null} buttonTitle="Done" buttonAction={navigateHome} />
    </>
  )
}