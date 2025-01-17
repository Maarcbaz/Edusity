import React from 'react';

const Button = ({ text, icon, bg, direction }) => {
	return (
		<div
			data-aos="fade-up"
			data-aos-delay="300"
			id="Contact"
			className={`font-roboto font-normal ${
				direction && 'flex'
			} items-center justify-center`}>
			<button
				className={`btn flex text-fontSm max-md:px-6 max-lg:px-3 items-center justify-center gap-2 ${
					bg && 'bg-btn text-white py-3 hover:border-btn hover:text-black'
				}`}>
				<a className="max-lg:text-[12px]" href="#Contact">
					{text}
				</a>
				{icon && (
					<div className="-pb-[24px]">
						<img className="w-[20px] pt-[1px]" src={icon} alt="arrow_icon" />
					</div>
				)}
			</button>
		</div>
	);
};

export default Button;
