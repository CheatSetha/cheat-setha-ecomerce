"use client"

import Loading from "@/app/Loading"
import axios from "axios"
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import * as Yup from "yup"

const validationSchema = Yup.object({
	email: Yup.string().email().required("កាក​​ មិនអាចទទេបានទេ"),
	name: Yup.string().required("កាក​​ មិនអាចទទេបានទេ"),
	password: Yup.string()
		.min(8, "កាក​​ password ត្រូវតែចាប់ពី៨ខ្ទង់ឡើង")
		.required("កាក​​ មិនអាចទទេបានទេ"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "កាក​​ password មិនត្រូវគ្នាទេ")
		.required("កាក​​ មិនអាចទទេបានទេ"),
	// Yub.mixed() for upload file with diferent type format
	file: Yup.mixed()
		.test("fileSize", " File ធំជាង 5MB", (value) => {
			if (!value) {
				return true
			}
			return value.size <= FILE_SIZE
		})
		.test("filsFormat", "Unsupported format", (value) => {
			if (!value) {
				return true
			}
			return SUPPORTED_FORMATS.includes(value.type)
		})
		.required("required"),
})

// for upload file
const FILE_SIZE = 1024 * 1024 * 5 // 5MB

const SUPPORTED_FORMATS = [
	"image/jpg",
	"image/jpeg",
	"image/gif",
	"image/png",
	"image/webp",
	"application/pdf",
]

export default function Page() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)

	// for submit to server
	const createNewUser = async (user) => {
		const { name, email, password, role, avatar } = user
		const myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")

		let raw = JSON.stringify({
			name,
			email,
			password,
			role,
			avatar,
		})

		let requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
		}
		try {
			const res = await fetch(
				"https://api.escuelajs.co/api/v1/users",
				requestOptions
			)
			if (!res.ok) {
				alert("something went wrong")
			} else {
				alert("user created successfully")

				const data = await res.json()
				console.log(data)
				return data
			}
		} catch (error) {
			alert(error.message)
		}
	}
	// end of submit to server

	// upload file

	const uploadImage = async (values) => {
		setIsLoading(true)
		try {
			const response = await axios.post(
				"https://api.escuelajs.co/api/v1/files/upload",
				values.file
			)
			console.log(response)
			router.push("/")
			setIsLoading(false)
			return (
				response.data.location ||
				"https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
			)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				{isLoading ? <Loading /> : null}
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold mb-5'>Login now!</h1>
					<img
						src='https://onepiecetopdecks.com/wp-content/uploads/2022/11/zr.jpg'
						alt=''
						className='rounded-2xl'
					/>
				</div>
				<div className='card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 p-5'>
					<Formik
						initialValues={{
							name: "",
							email: "",
							password: "",
							confirmPassword: "",
							avatar: "images.1.webp",
							role: "customer",
							file: undefined,
						}}
						validationSchema={validationSchema}
						onSubmit={async (values, { setSubmitting, resetForm }) => {
							const formData = new FormData()
							formData.append("file", values.file)

							const avatar = await uploadImage({ file: formData })
							console.log("avatar", avatar)

							values.avatar = avatar
							setTimeout(() => {
								createNewUser(values)
								setSubmitting(false)
								resetForm()
							}, 500)
						}}
					>
						{({ isSubmitting, setFieldValue }) => (
							<Form>
								<div>
									<label htmlFor='name'> ឈ្មោះអ្នកប្រើប្រាស់ </label> <br />
									<Field
										type='text'
										name='name'
										className='input input-bordered my-3 w-full '
										placeholder='បញ្ជូលឈ្មោះអ្នកប្រើប្រាស់'
									/>{" "}
									<br />
									<ErrorMessage
										name='name'
										component='h1'
										className='text-red-500 text-xs italic'
									/>
									{/* email */}
									<label htmlFor='email'> បញ្ចូល Email របស់អ្នក </label> <br />
									<Field
										type='email'
										name='email'
										className='input input-bordered my-3 w-full '
										placeholder='បញ្ជូល email អ្នកប្រើប្រាស់'
									/>{" "}
									<br />
									<ErrorMessage
										name='email'
										component='h1'
										className='text-red-500 text-xs italic'
									/>
									{/* password */}
									<label htmlFor='password'>
										{" "}
										បញ្ចូល password របស់អ្នក{" "}
									</label>{" "}
									<br />
									<Field
										type='password'
										name='password'
										className='input input-bordered my-3 w-full '
										placeholder='បញ្ជូលឈ្មោះអ្នកប្រើប្រាស់'
									/>{" "}
									<br />
									<ErrorMessage
										name='password'
										component='h1'
										className='text-red-500 text-xs italic'
									/>
									{/* confirm password */}
									<label htmlFor='confirmPassword'>
										{" "}
										ផ្ទៀង password របស់អ្នក{" "}
									</label>{" "}
									<br />
									<Field
										type='password'
										name='confirmPassword'
										className='input input-bordered my-3 w-full '
										placeholder='បញ្ជូលឈ្មោះអ្នកប្រើប្រាស់'
									/>{" "}
									<br />
									<ErrorMessage
										name='confirmPassword'
										component='h1'
										className='text-red-500 text-xs italic'
									/>
									{/* file for avarta */}
									<Field
										className=' my-3 file-input file-input-bordered file-input-info w-full '
										name='file'
										type='file'
										title='Select a file'
										setFieldValue={setFieldValue} // Set Formik value
										component={CustomInput} // component prop used to render the custom input
										isSubmitting={isSubmitting}
									/>
									<ErrorMessage
										name='file'
										component='h1'
										className='text-red-500 text-xs italic'
									/>
									<button
										type='submit'
										disabled={isSubmitting}
										className='btn btn-primary w-full  '
									>
										submit
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}

// do drag and drop and preview image
function CustomInput({ field, form, isSubmitting, ...props }) {
	const [preview, setPreview] = useState(null)
	// for reset imageds
	useEffect(() => {
		if (isSubmitting) {
			setPreview(null)
		}
	}, [isSubmitting])
	return (
		<div>
			<input
				type='file'
				onChange={(event) => {
					form.setFieldValue(field.name, event.currentTarget.files[0])
					setPreview(URL.createObjectURL(event.currentTarget.files[0]))
				}}
				// {...props} is use to pass all props from Formik Field component
				{...props}
			/>
			{preview && (
				<div className='avatar'>
					<div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
						<img
							src={preview}
							alt='dummy'
							width='100'
							height='100'
						/>
					</div>
				</div>
			)}
		</div>
	)
}

// end of drag and drop and preview image
