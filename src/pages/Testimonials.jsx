import React from 'react';
import Title from './Title';
import { Card } from '../component';
import { Cards } from '../constant';

const Testimonials = () => {
	return (
		<div id="Testimonial">
			<Title Title={'what student says'} subTitle={'testimonials'} />
			<div className="flex UIpadding gap-3">
				{Cards.map((card, index) => (
					<Card card={card} key={index} />
				))}
			</div>
		</div>
	);
};

export default Testimonials;
