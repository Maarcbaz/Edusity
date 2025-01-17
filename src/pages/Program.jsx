import React from 'react';
import Title from './Title';

import { ProgramImg } from '../constant';

const Program = () => {
	return (
		<div id="Program">
			<Title Title={'our program'} subTitle={'what we offer'} />
			<div className="flex max-md:flex-wrap items-center UIpadding my-14 justify-center gap-8">
				{ProgramImg.map((pro, index) => (
					<div key={index} className="relative">
						<div>
							<img
								data-aos={pro.animation}
								className="rounded-br  max-lg:w-[250px] max-md:w-full w-full"
								alt={`program${index}`}
								src={pro.program}
							/>
						</div>
						<div className="hover">
							<img
								className="w-[65px] max-md:w-[120px] bottom-3"
								src={pro.ProgramSM}
								alt={`programSM${index}`}
							/>
							<p className="text-sm capitalize text-white">{pro.programTxt}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Program;
