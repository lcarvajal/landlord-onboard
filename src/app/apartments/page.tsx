import Link from 'next/link'

interface Apartment {
  id: number;
  name: string;
  location: string;
  price: number;
  rooms: Room[];
  imageURL: string;
}

interface Room {
  id: number;
  name: string;
  size: number;
  equipment: string;
  imageURL: string;
}

const mockApartments: Apartment[] = [
  {
    id: 1,
    name: "Apartment 1",
    location: "Vienna, Austria",
    price: 100,
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObXdJytVLoBt-NHn1FQ0TmYolYopCq3hAJw&s",
    rooms: [
      {
        id: 1,
        name: "Room 1",
        size: 20,
        equipment: "Fridge, TV",
        imageURL: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Room 2",
        size: 30,
        equipment: "Fridge, TV, AC",
        imageURL: "https://via.placeholder.com/150",
      }
    ]
  },
  {
    id: 2,
    name: "Apartment 1",
    location: "Vienna, Austria",
    price: 100,
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObXdJytVLoBt-NHn1FQ0TmYolYopCq3hAJw&s",
    rooms: [
      {
        id: 1,
        name: "Room 1",
        size: 20,
        equipment: "Fridge, TV",
        imageURL: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Room 2",
        size: 30,
        equipment: "Fridge, TV, AC",
        imageURL: "https://via.placeholder.com/150",
      }
    ]
  },
  {
    id: 3,
    name: "Apartment 1",
    location: "Vienna, Austria",
    price: 100,
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObXdJytVLoBt-NHn1FQ0TmYolYopCq3hAJw&s",
    rooms: [
      {
        id: 1,
        name: "Room 1",
        size: 20,
        equipment: "Fridge, TV",
        imageURL: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Room 2",
        size: 30,
        equipment: "Fridge, TV, AC",
        imageURL: "https://via.placeholder.com/150",
      }
    ]
  }
]

export default function Apartments() {

  return (
    <main className="container mx-auto flex flex-col items-center h-screen w-screen">
      <div className="w-full p-6">
        <h1 className="text-4xl font-medium">Your Listings</h1>
      </div>
      <div className="p-6 grow w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockApartments.map(apartment => (
          <div key={apartment.id} className="image-container relative rounded-xl overflow-hidden aspect-square">
            <img className="h-full w-full object-cover" src={apartment.imageURL} />
            <div className="text-overlay absolute left-0  top-0 bottom-0 right-0 shadow-[inset_0_0_4em_0.8em_rgba(0,0,0,0.8)]">
            </div>
            <div className="p-2 text-overlay absolute left-0 top-0 ">
              <p className="bg-violet-800 px-2 text-white rounded-full">{apartment.rooms.length} rooms open</p>
            </div>
            <div className="p-2 absolute left-0 bottom-0 text-white">
              <h1 className="text-xl">{apartment.location}</h1>
              <p>{apartment.location}</p>
            </div>
          </div>
        ))}
        <div key={mockApartments.length} className="flex border-2 border-gray-200 rounded-xl overflow-hidden aspect-square items-center justify-center">
          <Link href="/apartments/new">
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
