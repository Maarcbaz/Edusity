import React, { useEffect } from 'react';
import { Footer, Navbar } from './component';
import { About, Campus, Hero, Program, Testimonials } from './pages';
import Contact from './pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
			{/* <Testimonials /> */}
			<Contact />
			<Footer />
		</>
	);
}

export default App;
