import React, { useEffect, useState } from 'react';
import { Button } from './index.js';

import { Logo, Menu_icon } from '../assets/icons';

const Navbar = () => {
	const [sticky, setSticky] = useState(false);
	const [toggleNav, setToggleNav] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY >= 50 ? setSticky(true) : setSticky(false);
		});
	}, []);
	const handleActive = () => {
		toggleNav ? setToggleNav(false) : setToggleNav(true);
	};
	return (
		<nav className="transition-all duration-300 font-roboto font-light">
			<div
				className={`
				${sticky && 'bg-nav_blue'} 
				nav`}>
				<div className="w-[150px] h-[30px]  max-sm:py-1 max-md:py-2 max-sm:pl-10  max-md:pl-3 cursor-pointer">
					<a href="#">
						<img src={Logo} alt="logo" />
					</a>
				</div>
				<div className="">
					<img
						className=" w-[30px] cursor-pointer z-20 absolute right-6 md:hidden top-5"
						src={Menu_icon}
						alt="menu_icon"
						onClick={handleActive}
					/>
				</div>
				<div
					className={` ${
						toggleNav ? 'max-md:translate-x-0' : 'max-md:translate-x-[500px]'
					} transition-all duration-300 flex items-center gap-20 max-md:pt-[95px] max-md:pr-16 max-md:right-0 max-md:flex-col max-md:w-[250px] max-md:bg-nav_blue max-md:h-screen`}>
					<ul className="text-white  max-md:flex-col md:gap-4 flex gap-5">
						<li>
							<a className="navLink" href="#">
								Home
							</a>
						</li>
						<li>
							<a className="navLink" href="#Program">
								program
							</a>
						</li>
						<li>
							<a className="navLink" href="#AboutUs">
								About Us
							</a>
						</li>
						<li>
							<a className="navLink" href="#Campus">
								Campus
							</a>
						</li>
						<li>
							<a className="navLink" href="#Testimonial">
								Testimonials
							</a>
						</li>
					</ul>
					<div className="max-md:-mt-10">
						<Button text={'Contact Us'} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
