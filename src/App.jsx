import React, { useEffect } from 'react';
import { Footer, Navbar } from './component';
import { About, Campus, Hero, Program, Contact, Testimonials } from './pages';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
console.log(import.meta.env);

function App() {
	useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 800,
			easing: 'ease-in-sine',
			delay: 100,
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<Navbar />
			<Hero />
			<Program />
			<About />
			<Campus />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
