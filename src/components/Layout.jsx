import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './'
import Footer from './


const Layout = () => {
	return (
		<section className="w-full h-screen">
			<Navbar />
			<div className="">
				<Outlet />
			</div>
			<Footer />
		</section>
	)
}

export default Layout