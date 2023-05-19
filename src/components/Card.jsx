"use client"
import axios from "axios"
import { Imprima } from "next/font/google"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { MdOutlineReorder } from "react-icons/md"

const Card = ({ id, title, desc, price, img }) => {
	const router = useRouter();
	// place to define state
	const [show, setShow] = useState(false)
	console.log(id)

	// function

	// click and show modal

	const setShowModal = () => {
		setShow(!show)
	}

	// handle delete products
	const handleDeleteProduct = async (id) => {
		const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`,{method:'DELETE'})
		router.refresh()
		const data = await res.json()
		console.log(data)
		
		
	}

	return (
		<div className='card md:max-w-xs bg-base-100 shadow-xl'>
			<MdOutlineReorder
				onClick={setShowModal}
				className='absolute right-1 top-1 text-sky-950 text-2xl cursor-pointer'
			/>
			<div
				className={
					show
						? "flex flex-col w-44 space-y-5 bg-slate-700 p-5 rounded-xl absolute top-8 right-0"
						: " hidden "
				}
			>
				<button
					onClick={() => handleDeleteProduct(id)}
					className='btn btn-error'
				>
					Delete{" "}
				</button>
				<button className='btn btn-primary'>Edite</button>
			</div>
			<Link href={`/product/${id}`}>
				<figure>
					<img
						className='rounded-t-2xl md:max-w-xs'
						src={img ? img : "/images/1.webp"}
						alt='Shoes'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>
						{title ? title : "おはようございます。"}
					</h2>
					<small> {id}</small>
					<small className='text-red-800'>$ {price ? price : "free"}</small>
					<p>{desc ? desc : "あなたのこと大好き"}</p>
				</div>
			</Link>
		</div>
	)
}

export default Card
