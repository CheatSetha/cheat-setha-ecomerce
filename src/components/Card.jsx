"use client"
import axios from "axios"
import { Imprima } from "next/font/google"
import Link from "next/link"
import {TfiShoppingCart} from "react-icons/tfi"

import React, { useState } from "react"

const Card = ({ id, title, desc, price, img }) => {
	return (
		<div className='card  md:w-[200px] lg:w-[250px] xl:w-[312px] bg-base-100 shadow-xl'>
			<Link href={`/product/${id}`}>
				<figure>
					<img
						className='rounded-t-2xl '
						src={img ? img : "/images/1.webp"}
						alt='Shoes'
					/>
				</figure>
				<div className='card-body'>
					<h1 className='text-slate-700 text-xl'>
						{title ? title : "おはようございます。"}
					</h1>
					
					<div className="flex justify-between">
					<h1 className='test-2xl font-bold'>$ {price}</h1>
					<TfiShoppingCart className=" bg-slate-100 rounded-full  w-10 h-10 p-2 "/>
					</div>
					
				</div>
			</Link>
		</div>
	)
}

export default Card
