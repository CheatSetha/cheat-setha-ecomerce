
import { useParams } from 'next/navigation'
import React from 'react'


export async function getProductDetails(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  const data = await res.json()
  return data

}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;
 
  // fetch data
  const product = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  const data = await product.json()
  
  return {
    title: data.title,
    description: data.description,
    image: data.images[0],
    
   
  };
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