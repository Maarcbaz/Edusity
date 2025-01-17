import React from 'react';

const Card = ({ card }) => {
	return (
		<div>
			<div className="flex ">
				<div>
					<img
						width={'50px'}
						className="rounded-full border-light_blue border-[3px]"
						src={card.img}
						alt={card.alt}
					/>
				</div>
				<div>
					<h3 className="capitalize text-light_blue  font-bold">{card.name}</h3>
					<p className="text-sm text-lightText">{card.school}</p>
				</div>
			</div>
			<div className="text-lightText text-sm mt-3">
				<p>{card.speech}</p>
			</div>
		</div>
	);
};

export default Card;
