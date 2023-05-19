import Link from 'next/link'
import React from 'react'

const CategoryCard = ({thubmnail, title,id}) => {
    return (
        <>
        <Link href={`/category/${id}`} className="avatar flex flex-col">
            <div className="w-20 mask mask-squircle">
                <img src={thubmnail? thubmnail : "https://cdn-icons-png.flaticon.com/128/1102/1102097.png"} />
            </div> 
            <h1 className='text-center mt-3'>{title? title : "product"}</h1>
        </Link>
       
        </>
    )
}

export default CategoryCard