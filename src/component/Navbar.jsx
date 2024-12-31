import React from 'react';

import { logo } from '../assets/icons';

const Navbar = () => {
	return (
		<div className="container">
			<div className="">
				<div>
					<img src={logo} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
