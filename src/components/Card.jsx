import Link from "next/link"
import React from "react"

const Card = ({id,title, desc, price, img}) => {
	return (
        <Link href={`/product/${id}`}>
		<div className='card max-w-xs bg-base-100 shadow-xl'>
			<figure>
				<img
					src={img ? img : "/images/1.webp"}
					alt='Shoes'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title ? title: "おはようございます。"}</h2>
				<small className="text-red-800">$ {price? price : "free"}</small>
				<p>{desc ? desc : "あなたのこと大好き"}</p>
			
			</div>
		</div>
        </Link>
	)
}

export default Card
