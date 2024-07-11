import { Bottombar } from '@/app/components/layout'
import { createApartment } from './actions'

export default function NewApartment() {
  return (
    <main className="h-screen flex flex-col items-center">
      <h1 className="text-3xl p-6">New apartment</h1>
      <form id="new-apartment">
        <label htmlFor="name" >Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Sunny apartment with heated floors"
          required
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Stephansplatz 1 / 1"
          required
        />
        <input
          className="text-gray-600"
          type="text"
          id="city"
          name="city"
          value="Vienna, AT"
          readOnly={true}
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
        <label htmlFor="numberOfRooms">Number of rooms available to rent:</label>
        <input
          className="mb-6"
          type="number"
          id="numberOfRooms"
          name="numberOfRooms"
          pattern="[0-9]"
          required
          min={1}
        />
      </form>
      <Bottombar formId="new-apartment" buttonTitle="Next" buttonAction={createApartment} />
    </main>
  )
}