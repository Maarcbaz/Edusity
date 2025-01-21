import React from 'react';

const Title = ({ subTitle, Title }) => {
	return (
		<div className="relative  font-bold text-lg text-center mt-[70px] mb-[60px] text-red-700 ">
			<p
				className="text-light_blue text-sm uppercase font-medium"
				data-aos="fade-up">
				{subTitle}
			</p>
			<h1 data-aos="fade-up" className="text-primary_blur capitalize text-4xl">
				{Title}
			</h1>
		</div>
	);
};

export default Title;
