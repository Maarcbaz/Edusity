import { Fragment } from 'react';
import { AboutSec } from '../../constant';
const About = () => {
	return (
		<div
			id="AboutUs"
			className="flex  UIpadding gap-12 max-lg:flex-col-reverse mb-10 items-center">
			{AboutSec.map((about, index) => (
				<Fragment key={index}>
					<div className="relative">
						<div>
							<img
								data-aos="fade-right"
								src={about.img1}
								className="rounded-br"
								alt={`about${index}`}
							/>
						</div>
						<div className="w-[60px] top-[50%]  translate-x-[20px] translate-y-[-20px]  right-[50%] cursor-pointer absolute">
							<img data-aos="flip-right" src={about.play} alt="play_icon" />
						</div>
					</div>
					<div>
						<h5
							data-aos="fade-up"
							className="capitalize 
						text-light_blue font-bold mb-2">
							{about.aboutTxt}
						</h5>
						<h1
							data-aos="fade-up"
							className="text-nav_blue text-[30px] text-wrap capitalize mb-2 font-bold">
							{about.header} <br />
							<span>{about.headerspan}</span>
						</h1>
						<div className="text-[15px] text-lightText">
							<p data-aos="fade-up">{about.par1}</p>
							<p data-aos="fade-up" className="my-2">
								{about.par2}
							</p>
							<p data-aos="fade-up">{about.par3}</p>
						</div>
					</div>
				</Fragment>
			))}
		</div>
	);
};

export default About;
