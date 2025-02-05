import React, { Fragment } from 'react';
import { HeroText } from '../../constant';
import { Button } from '../../component';
import { Dark_arrow } from '../../assets/icons';
import { HeroImg } from '../../assets/gallery';
// const Hero = () => {
// 	return (
// 		<header className="font-roboto">
// 			<div
// 				className={`h-screen bg-hero-img bg-no-repeat bg-cover bg-center  text-white items-center w-full flex justify-center`}>
// 				<div className="bg-gradient-to-r bg-cover flex h-screen items-center justify-center bg-center w-screen from-[rgba(8,0,58,.7)] to-[rgba(8,0,58,0.7)]">
// 					<div></div>
// 					<div className="text-center max-md:px-[25px] max-w-[800px]">
// 						{HeroText.map((hero, index) => (
// 							<Fragment key={index}>
// 								<h1
// 									data-aos="fade-up"
// 									className="text-[55px] max-md:text-[30px] font-medium my-4 leading-[4rem] max-md:leading-8 capitalize">
// 									{hero.header}
// 								</h1>
// 								<p
// 									data-aos="fade-up"
// 									data-aos-delay="200"
// 									className="my-4 font-normal">
// 									{hero.paragraph}
// 								</p>
// 								<Button direction text="Explore more" icon={Dark_arrow} />
// 							</Fragment>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };

// export default Hero;

const Hero = () => {
	return (
		<div
			className="w-full h-screen flex items-center justify-center text-white bg-cover bg-center"
			style={{
				backgroundImage: `linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url(${HeroImg})`,
			}}>
			<div className="text-center max-w-2xl">
				<h2 data-aos="fade-up" className="mb-4 text-5xl md:text-4xl font-bold">
					We Ensure better education for a better world
				</h2>
				<p
					data-aos="fade-up"
					data-aos-delay="200"
					className="text-lg md:text-base leading-relaxed mb-4">
					Our cutting-edge curriculum is designed to empower students with the
					knowledge, skills, and experiences needed to excel in the dynamic
					field of education.
				</p>
				<Button direction text="Explore more" icon={Dark_arrow} />
			</div>
		</div>
	);
};

export default Hero;
