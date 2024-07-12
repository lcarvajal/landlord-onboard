'use client'
import { Database } from '@/utils/supabase/database.types'
import Image from "next/image";
import { updateRoom } from "@/app/apartments/[slug]/actions";
import { toast } from "react-hot-toast";
import { useState } from "react";

interface RoomFormProps {
  room: Database['public']['Tables']['rooms']['Row']
  apartmentId: number
}

export default function RoomForm(props: RoomFormProps) {
  const [updateButtonTitle, setUpdateButtonTitle] = useState('Update');
  const [didEdit, setDidEdit] = useState(false)
  const room = props.room
  const apartmentId = props.apartmentId

  async function handleUpdateRoom(formData: FormData) {
    setDidEdit(false);
    setUpdateButtonTitle("Updating...");
    try {
      await updateRoom(formData);
      setUpdateButtonTitle("Update");
    } catch (error: any) {
      setDidEdit(true);
      setUpdateButtonTitle("Update");
      toast.error(error.message);
    }
  }

  function handleInputEdit() {
    setDidEdit(true);
  }

  return (
    <form id={`room-${room.id}`}>
      {room.image_url && <Image className="max-h-24 object-scale-down" src={`https://utmxzqgmamtmrrxbygqb.supabase.co/storage/v1/object/public/${room.image_url}`} alt={room.name ? room.name : "image of room"} width={200} height={200} />}
      <input
        type="hidden"
        name="apartment_id"
        value={apartmentId}
        onChange={handleInputEdit}
      />
      <input
        type="hidden"
        name="room_id"
        value={room.id}
        onChange={handleInputEdit}
      />
      <label htmlFor="name">Room name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={room.name as string}
        onChange={handleInputEdit}
        required
      />
      <label htmlFor="size">Size in square meters:</label>
      <input
        type="number"
        id="size"
        name="size"
        value={room.size as number}
        onChange={handleInputEdit}
        min={1}
        required
      />
      <label htmlFor="equipment">Equipment:</label>
      <input
        type="text"
        id="equipment"
        name="equipment"
        value={room.equipment as string}
        onChange={handleInputEdit}
        required
      />
      <label htmlFor="image">Image:</label>
      <input
        className="mb-6"
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={handleInputEdit}
      />
      {didEdit && <button className="primary-button" formAction={handleUpdateRoom}>{updateButtonTitle}</button>}
    </form>
  )
}