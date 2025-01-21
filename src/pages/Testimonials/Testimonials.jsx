import React, { Fragment } from 'react';
import Title from '../Title/Title';
import { Card } from '../../component';
import { Cards } from '../../constant';

const Testimonials = () => {
	return (
		<Fragment>
			<Title Title={'what student says'} subTitle={'testimonials'} />
			<div className="UIpadding">
				<div id="Testimonial" className="flex overflow-hidden">
					<Card />
				</div>
			</div>
		</Fragment>
	);
};

export default Testimonials;
