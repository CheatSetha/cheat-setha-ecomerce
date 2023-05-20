import CategoryCard from "@/components/CategoryCard"
import UserCard from "@/components/UserCard"
import React from "react"

// meta data 
export const metadata = {

    title : "ISTAD - USERS"

}

// create a fucntion to fetch all  category

export async function getUsers() {
	const res = await fetch("https://api.escuelajs.co/api/v1/users", {
		cache: "no-store",
	})
	const data = await res.json()
	return data
}

const page = async () => {
	const users = await getUsers()
	return (
		<div>
			<h1 className='text-4xl font-bold text-center my-10 text-green-700'>
				List of all users
			</h1>
			<p className='text-center mb-5'>Total users : {users.length}</p>
			
			<div className='flex flex-wrap justify-center gap-5'>
				{users.map((u) => (
					<UserCard
						key={u.id}
            id={u.id}
						avatar={u.avatar}
						email={u.email}
						name={u.name}
						role={u.role}
					/>
				))}
			</div>
		</div>
	)
}

export default page
