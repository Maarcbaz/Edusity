import React from 'react';
const Card = ({ card }) => {
	return (
		<>
			<div className="flex items-center  justify-between overflow-hidden gap-1">
				<section className="my-6">
					<div className="flex flex-col gap-4 w-[350px] bg-gray-100 shadow-md py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
						<div className="flex gap-2">
							<div>
								<img
									width={'50px'}
									className="rounded-full border-light_blue border-[3px]"
									src={card.img}
									alt={card.alt}
								/>
							</div>
							<div>
								<h3 className="capitalize text-light_blue  font-bold">
									{card.name}
								</h3>
								<p className="text-sm text-lightText">{card.school}</p>
							</div>
						</div>
						<div className="text-lightText text-sm mt-1">
							<p>{card.speech}</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Card;
