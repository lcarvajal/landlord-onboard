'use client'
import { Bottombar } from "@/app/components/navigation";
import toast, { Toaster } from "react-hot-toast";
import { createApartment } from './actions'

export default function NewApartmentForm() {
  async function handleNewApartment(formData: FormData | null) {
    try {
      await createApartment(formData);
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <main className="flex grow flex-col items-center">
        <h1 className="text-3xl p-6">New apartment</h1>
        <form className="w-full md:w-1/2 lg:w-1/3" id="new-apartment">
          <label htmlFor="name" >Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Sunny apartment"
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
            className="text-gray-400"
            type="text"
            id="city"
            name="city"
            value="Vienna, AT"
            readOnly={true}
            required
            title="Listing apartments only available in Vienna, AT"
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
      </main>
      <Bottombar formId="new-apartment" buttonTitle="Next" buttonAction={handleNewApartment} />
    </>
  )
}