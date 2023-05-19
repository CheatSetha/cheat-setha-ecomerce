import React from "react"

const Carousel = () => {
	return (
		<div className='carousel w-full h-[80vh]'>
			<div
				id='slide1'
				className='carousel-item relative w-full'
			>
				<img
					src='https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					className='w-full'
				/>
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a
						href='#slide4'
						className='btn btn-circle'
					>
						❮
					</a>
					<a
						href='#slide2'
						className='btn btn-circle'
					>
						❯
					</a>
				</div>
			</div>
			<div
				id='slide2'
				className='carousel-item relative w-full'
			>
				<img
					src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					className='w-full'
				/>
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a
						href='#slide1'
						className='btn btn-circle'
					>
						❮
					</a>
					<a
						href='#slide3'
						className='btn btn-circle'
					>
						❯
					</a>
				</div>
			</div>
			<div
				id='slide3'
				className='carousel-item relative w-full'
			>
				<img
					src='https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					className='w-full'
				/>
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a
						href='#slide2'
						className='btn btn-circle'
					>
						❮
					</a>
					<a
						href='#slide4'
						className='btn btn-circle'
					>
						❯
					</a>
				</div>
			</div>
			<div
				id='slide4'
				className='carousel-item relative w-full'
			>
				<img
					src='https://images.pexels.com/photos/251482/pexels-photo-251482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					className='w-full'
				/>
				<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
					<a
						href='#slide3'
						className='btn btn-circle'
					>
						❮
					</a>
					<a
						href='#slide1'
						className='btn btn-circle'
					>
						❯
					</a>
				</div>
			</div>
		</div>
	)
}

export default Carousel
