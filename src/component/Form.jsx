import React from 'react';
import Button from './Button';
import { White_arrow } from '../assets/icons';

const Form = () => {
	return (
		<div className="flex-col items-start">
			<form data-aos="zoom-in" action="get">
				<div className="">
					<label htmlFor="name">Your Name:</label>
					<br />
					<input
						className="form"
						type="text"
						name="name"
						required
						id="name"
						placeholder="Enter your full name"
					/>
				</div>
				<div className="my-3">
					<label htmlFor="number">Phone Number:</label>
					<br />
					<input
						className="form"
						type="number"
						name="nummber"
						required
						id="number"
						placeholder="Enter your Phone number"
					/>
				</div>
				<div className="">
					<label htmlFor="message">Message:</label>
					<br />
					<textarea
						name="message"
						className="form"
						required
						placeholder="Enter your message"
						id="message"
						rows={6}></textarea>
				</div>
				<Button text="Submit Now" bg icon={White_arrow} />
			</form>
		</div>
	);
};

export default Form;
