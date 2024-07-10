'use client'
import { createApartment } from './actions'
import { useState } from "react"

export default function NewApartment() {
  const [isValidForm, setIsValidForm] = useState(false)
  const [formError, setFormError] = useState("")

  function validateForm() {
    let errorMessage = ""

    const name = document.getElementById('name') as HTMLInputElement
    if (name.value.replace(/\s/g, '').length == 0) {
      errorMessage = "Name cannot be empty"
    }

    const location = document.getElementById('location') as HTMLInputElement
    if (location.value.replace(/\s/g, '').length == 0) {
      errorMessage = "Location cannot be empty"
    }

    const priceInput = document.getElementById('price') as HTMLInputElement
    const price = parseFloat(priceInput.value.replace(/\s/g, ''))
    if (isNaN(price) || price <= 0) {
      errorMessage = "Price must be a number greater than 0"
    }

    const roomsInput = document.getElementById('rooms') as HTMLInputElement
    const rooms = parseInt(roomsInput.value.replace(/\s/g, ''))
    if (isNaN(rooms) || rooms <= 0) {
      errorMessage = "Number of rooms must be a number greater than 0"
    }

    setFormError(errorMessage)

    if (errorMessage.length == 0) {
      setIsValidForm(true)
    }
  }

  return (
    <main className="h-screen flex flex-col items-center">
      <h1 className="text-3xl p-6">New apartment</h1>
      <form>
        <label htmlFor="name" >Name:</label>
        <input type="text" id="name" name="name" placeholder="Sunny apartment with heated floors" onChange={validateForm} />
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" placeholder="Stephansplatz 1 / 1" onChange={validateForm} />
        <input className="text-gray-600" type="text" id="city" name="city" value="Vienna, AT" readonly="readonly" />
        <label htmlFor="price">Rent price per month in € Euros:</label>
        <input type="number" id="price" name="price" onChange={validateForm} />
        <label htmlFor="rooms">Number of rooms available to rent:</label>
        <input className="mb-6" type="number" id="rooms" name="rooms" onChange={validateForm} />
        <p className="text-red-500">{formError}</p>
        <button className="primary-button" formAction={createApartment} disabled={!isValidForm}>Submit</button>
      </form>
    </main>
  )
}