"use client"
import axios from "axios"
import { Imprima } from "next/font/google"
import Link from "next/link"

import React, { useState } from "react"


const Card = ({ id, title, desc, price, img }) => {
	return (
		<div className='card  md:max-w-xs bg-base-100 shadow-xl'>
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
					<p className="line-clamp-3">{desc ? desc : "あなたのこと大好き"}</p>
				</div>
			</Link>
		</div>
	)
}

export default Card
