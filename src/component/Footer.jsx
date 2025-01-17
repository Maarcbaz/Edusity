import React from 'react';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<div className="UIpadding">
			<div className="mt-14 pt-10 pb-6 flex max-md:flex-col items-center justify-between border-teal-950 border-t">
				<div className="">
					<p>© {year} Edusity. All right reserved.</p>
				</div>
				<div className="flex gap-4">
					<p className='hovertext'>Terms of service</p>
					<p className='hovertext'>Privacy Policy</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
