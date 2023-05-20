"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
const NavBar = () => {
	const pathName = usePathname()
	console.log(pathName)
	if(pathName.includes("/dashboard")){
		return null
	}

	if(pathName.includes("sign-up")) return null;
		

	return (
		<div className='navbar bg-base-100 sticky top-0 z-50'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label
						tabIndex={0}
						className='btn btn-ghost lg:hidden'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<a>Item 1</a>
						</li>
						<li tabIndex={0}>
							<a className='justify-between'>
								Parent
								<svg
									className='fill-current'
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
								>
									<path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
								</svg>
							</a>
							<ul className='p-2  bg-white'>
								<li className="bg-white">
									<a>Submenu 1</a>
								</li>
								<li className="bg-white">
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<Link href={"/"} className='btn btn-ghost normal-case '>
					<img className="w-10" src="/images/alien.png" alt="" />
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<Link href={"/"} >Home</Link>
					</li>
					<li tabIndex={0}>
						<Link href={"/dashboard"}>
							Dashboard
							<svg
								className='fill-current'
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
							>
								<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
							</svg>
						</Link>
						<ul className='p-2 bg-white w-full'>
							<li>
								<Link href={"/dashboard/setting"}>Setting</Link>
							</li>
							<li>
								<Link href={"/dashboard/analytic"}>Analytic</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href={"/about-us"}>About us</Link>
					</li>
					<li>
						<Link href={"/users"}>All Users</Link>
					</li>
                   
				</ul>
			</div>
			<div className='navbar-end space-x-3'>
				<Link href={"/login"} className='btn bg-blue-700 border-0 hover:bg-pink-600 hover:text-white'>Login</Link>
                <Link href={"/sign-up"} className='btn'>sign up</Link>
			</div>

			
		</div>
	)
}

export default NavBar
