import React, { Fragment } from 'react';
import Title from './Title';
import { GalleryImg } from '../constant';
import { Button } from '../component';
import { White_arrow } from '../assets/icons';

const Campus = () => {
	return (
		<div id="Campus">
			<Title Title={'campus info'} subTitle={'gallery'} />
			<div className="flex max-md:flex-wrap UIpadding gap-5 mb-14">
				{GalleryImg.map((gallery, index) => (
					<Fragment key={index}>
						<div>
							<img data-aos={gallery.animation} className="rounded-br" src={gallery.src} alt={gallery.alt} />
						</div>
					</Fragment>
				))}
			</div>
			<Button text="see more here" direction bg icon={White_arrow} />
		</div>
	);
};

export default Campus;
