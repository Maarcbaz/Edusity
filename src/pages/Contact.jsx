import React from 'react';
import Title from './Title';
import { ContactInfo } from '../constant';
import { Form } from '../component';

const Contact = () => {
	return (
		<div id="Contact">
			<Title Title={'contact us'} subTitle={'get in touch'} />
			<div className="flex items-center UIpadding">
				<div className="flex max-lg:flex-col gap-10">
					{ContactInfo.map((contact, index) => (
						<ul key={index} className="">
							<li className="flex gap-6 mb-4 items-center">
								<p
									data-aos="fade-up"
									className="text-nav_blue capitalize  text-xl font-semibold">
									{contact.info}
								</p>
								<div className="w-[35px]">
									<img data-aos="zoom-in-up" src={contact.infoIcon} alt="" />
								</div>
							</li>
							<li className="max-w-[450px] text-lightText">
								<p data-aos="fade-up">{contact.infoText}</p>
							</li>
							<li className="list">
								<div className="w-[25px]">
									<img data-aos="fade-right" src={contact.MailIcon} alt="" />
								</div>
								<p data-aos="fade-up">{contact.email}</p>
							</li>
							<li className="list">
								<div className="w-[25px]">
									<img data-aos="fade-right" src={contact.PhoneIcon} alt="" />
								</div>
								<p data-aos="fade-up">{contact.contact}</p>
							</li>
							<li className="list">
								<div className="w-[25px]">
									<img data-aos="fade-right" src={contact.addressIcon} alt="" />
								</div>
								<p data-aos="fade-up">{contact.address}</p>
							</li>
						</ul>
					))}
					<div className="">
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
