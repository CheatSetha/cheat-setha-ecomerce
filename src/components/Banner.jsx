import React from "react"

const Banner = () => {
	return (
		<div
			id='banner'
			className='w-full h-[200px] md:h-96 mt-5 rounded-2xl bg-green-300 flex flex-wrap justify-around items-center'
		>
			<div>
				<h1 className='text-[20px] md:text-[40px] lg:text-[60px] w-[200px] md:w-[300px] lg:w-[500px] px-0 md:px-5'>Find the best Product for you!</h1>
			</div>
			<div>
				<img
					className='w-[150px] md:w-[360px] lg:w-[400px] '
					src='/images/banner.png'
					alt='banner img'
				/>
			</div>
		</div>
	)
}

export default Banner
