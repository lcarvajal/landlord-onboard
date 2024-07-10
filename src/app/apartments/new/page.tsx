export default function NewApartment() {
  return (
    <main>
      <h1>New apartment</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" />
        <label htmlFor="rooms">Rooms:</label>
        <input type="number" id="rooms" name="rooms" />
        <button className="primary-button" type="submit">Submit</button>
      </form>
    </main>
  )
}