import React, { Fragment } from 'react';
import { HeroText } from '../constant';
import { Button } from '../component';
import { Dark_arrow } from '../assets/icons';
const Hero = () => {
	return (
		<header className="font-roboto">
			<div
				className={`h-screen bg-hero-img bg-no-repeat bg-cover bg-center  text-white items-center w-full flex justify-center`}>
				<div className="bg-gradient-to-r bg-cover flex h-screen items-center justify-center bg-center w-screen from-[rgba(8,0,58,.7)] to-[rgba(8,0,58,0.7)]">
					<div></div>
					<div className="text-center max-w-[800px]">
						{HeroText.map((hero, index) => (
							<Fragment key={index}>
								<h1
									data-aos="fade-up"
									className="text-[55px] font-medium my-4 leading-[4.5rem] capitalize">
									{hero.header}
								</h1>
								<p
									data-aos="fade-up"
									data-aos-delay="200"
									className="my-4 font-normal">
									{hero.paragraph}
								</p>
								<Button direction text="Explore more" icon={Dark_arrow} />
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
