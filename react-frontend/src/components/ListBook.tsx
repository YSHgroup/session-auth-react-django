import React, { useEffect, useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'
function ListBookComponent() {
	const [bookList, setBookList] = useState<{ name: string; author: string }[]>(
		[]
	)
	useEffect(() => {
		setCSRF()
		login()
		fetchData()
	}, [])

	const setCSRF = async () => {
		const csrfURL = 'http://127.0.0.1:8000/api/setcsrf/'
		await axios.get(csrfURL)
		// const response = await axios.get(csrfURL)
	}

	const login = async () => {
		const loginURL = 'http://127.0.0.1:8000/api/login/'
		const response = await axios.post(loginURL, {
			username: 'priyanshugupta',
			password: '1234',
		})
    // await axios.post(loginURL, {
		// 	username: 'YSHgroup',
		// 	password: '22182218',
		// })
	}

	const apiURL = 'http://127.0.0.1:8000/api/listbooks/'
	const fetchData = async () => {
		const response = await axios.get(apiURL, { withCredentials: true })
		console.log(response)
		setBookList(response.data)
		console.log(bookList)
		console.log(response.data)
	}
	return (
		<div className="main-section">
			<h1>All Books</h1>
			<div className="book-list">
				{bookList.map((book, index) => (
					<ul key={index}>
						<li>Book: {book.name}</li>
						<li>Author: {book.author}</li>
					</ul>
				))}
			</div>
		</div>
	)
}
export default ListBookComponent
