import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Navbar, Footer } from './'


const Layout = () => {
	return (
		<section className="overflow-x-hidden">
			<Navbar />
				<Outlet />
			<Footer />
		</section>
	)
}

export default Layout