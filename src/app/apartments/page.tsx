import Link from 'next/link'
import Image from 'next/image'
import { getApartments } from './actions'

export default async function Apartments() {
  const apartments = await getApartments();

  return (
    <main className="container mx-auto flex flex-col grow items-center">
      <div className="w-full p-6 flex flex-row justify-between">
        <h1 className="text-5xl font-medium">Your Listings</h1>
        <form className="bg-black p-0 mt-1">
          <input className="inline w-64 mr-3" type="text" />
          <button className="primary-button inline w-24">Search</button>
        </form>
      </div>
      <div className="p-6 grow w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apartments.map(apartment => (
          <div key={apartment.id} className="image-container relative rounded-xl overflow-hidden aspect-square">
            <Link href={`/apartments/${apartment.id}`}>
              {(apartment.rooms.length > 0 && apartment.rooms[0].image_url) ?
                <Image className="h-full w-full object-cover" src={`https://utmxzqgmamtmrrxbygqb.supabase.co/storage/v1/object/public/${apartment.rooms[0].image_url}`} alt={apartment.rooms[0].name ? apartment.rooms[0].name : "apartment room"} width={200} height={200} />
                :
                <div className="h-full w-full object-cover bg-gray-400 flex items-center justify-center text-gray-800" >
                  <p>Image missing</p>
                </div>
              }
              <div className="text-overlay absolute left-0  top-0 bottom-0 right-0 shadow-[inset_0_0_4em_0.8em_rgba(0,0,0,0.8)]">
              </div>
              <div className="p-2 text-overlay absolute left-0 top-0 ">
                <p className="bg-blue-600 px-2 text-white rounded-full">
                  {apartment.rooms.length === 1 ? '1 room' : `${apartment.rooms.length} rooms`}
                </p>
              </div>
              <div className="p-2 absolute left-0 bottom-0 text-white">
                <h1 className="text-xl">{apartment.location}</h1>
                <p>Vienna, Austria</p>
              </div>
            </Link>
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
