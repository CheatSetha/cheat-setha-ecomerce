import { useParams } from 'next/navigation'
import React from 'react'
async function getProductDetails(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  const data = await res.json()
  return data

}
export async function generateMetadata({ params }) {
  const { id } = params
  const product = await getProductDetails(id)
  return {
    title: product.title,
    description: product.description,
    metaBanner: product.images[0],
    metaBase: new URL("https://escuelajs.com/")
  }
}
const page = async ({ params }) => {

  // view detial
  const { id } = params

  const product = await getProductDetails(id)
  console.log(product)
  console.log(params)


  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-[50%] mx-auto my-10">
      <figure><img src={product.images ? product.images : "/images/1.webp"} alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.title ? product.title : "Loading..."}</h2>
        <p>{product.description}.</p>

      </div>
    </div>
  )
}

export default page