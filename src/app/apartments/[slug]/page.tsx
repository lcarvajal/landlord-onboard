
export default async function Apartment({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  )
}