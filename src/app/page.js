import Card from "@/components/Card"
import CategoryCard from "@/components/CategoryCard"
import UserCard from "@/components/UserCard"
import Link from "next/link"

// set static meta data
export const metadata = {
	title: "ISTAD - Home",
	description: 'This is my app',
	
	
	openGraph: {
	  title: 'ISTAD-HOME',
	  description: 'This is my app',
	  url: 'https://next-v13-with-form-upload-file.vercel.app/',
	  siteName: 'My App',
	  images: [
		{
		  url: 'https://myapp.com/og.png',
		  width: 800,
		  height: 600,
		},
	  ],
	},
	twitter: {
	  title: 'My App',
	  description: 'This is my app',
	  url: 'https://myapp.com',
	  image: 'https://myapp.com/og.png',
	}

	
}


export async function fetchData() {
	const res = await fetch(
		"https://api.escuelajs.co/api/v1/products?limit=20&offset=0",
		{cache: "no-store" }
	)
	const data = await res.json()
	return data
}
// fecth category
export async function getCategory() {
	const res = await fetch("https://api.escuelajs.co/api/v1/categories")
	const data = await res.json()
	console.log(data)
	return data
}

export async function getuser() {
	const res = await fetch("https://api.escuelajs.co/api/v1/users?limit=8")
	const data = await res.json()
	return data
}
// sort product by id desc and limit 20
// export function sortProduct(products) {
// 	return products.sort((a, b) => b.id - a.id).slice(0, 20)
// }

export default async function Home() {
	//  call function
	const products = await fetchData()
	const categories = await getCategory()
	const users = await getuser()

	// const sortedProducts = sortProduct(products)

	// filter product by name
	// const filteredProducts = products.filter((p)=>
	// p.title && p.title.toLowerCase().includes(query.toLowerCase())
	// )

	return (
		<main className='w-[90%] mx-auto'>
			
			<Link
				href={"/product/upload"}
				className=' fixed right-1 bottom-1 z-50 p-5'
			>
				<img
					className='w-20 md:w-32'
					src='/images/add.png'
					alt="add product"
				/>
			</Link>
			{/* list of category */}
			<h1 className='text-3xl font-bold my-4'> Category list</h1>
			<div className='flex space-x-3 flex-wrap'>
				{categories.map((cate) => (
					<CategoryCard
						key={cate.id}
						thubmnail={cate.image}
						title={cate.name}
						id={cate.id}
					/>
				))}
			</div>

			{/* list product  */}
			<h1 className='font-bold text-2xl my-5'>Our Products{products.length} </h1>

			<div className='flex flex-wrap justify-between'> 
				<div className='flex flex-wrap   mx-auto gap-3 w-full md:w-10/12'>
					{products.map((product) => (
						<Card
							key={product.id}
							title={product.title}
							desc={product.description}
							img={product.images}
							id={product.id}
							price={product.price}
						/>
					))}
				</div>

				<aside className=' w-full md:w-2/12 space-y-5'>
					<h4 className='text-center font-bold text-2xl'>Top users</h4>
					{users.map((u) => (
						<UserCard
							key={u.id}
							avatar={u.avatar}
							email={u.email}
							name={u.name}
							role={u.role}
						/>
					))}
				</aside>
			</div>
		</main>
	)
}
