import { createApartment } from './actions'

export default function NewApartment() {

  return (
    <main>
      <h1 className="text-3xl">New apartment</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" />
        <label htmlFor="rooms">Number of rooms available to rent:</label>
        <input className="mb-6" type="number" id="rooms" name="rooms" />
        <button className="primary-button" formAction={createApartment} >Submit</button>
      </form>
    </main>
  )
}