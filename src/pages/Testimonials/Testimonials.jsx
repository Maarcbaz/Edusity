import React from 'react';
import Title from '../Title/Title';
import Slider from 'react-slick';
import { settings } from '../../constant';
import { Cards } from '../../constant';
import { Card } from '../../component';
const Testimonials = () => {
	return (
		<div id="Testimonial" className="UIpadding">
			<Title Title={'what student says'} subTitle={'testimonials'} />
			<Slider {...settings}>
				{Cards.map((card, index) => (
					<Card card={card} key={index} />
				))}
			</Slider>
		</div>
	);
};

export default Testimonials;
