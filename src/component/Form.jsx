import React, { useState } from 'react';
import Button from './Button';
import { White_arrow } from '../assets/icons';

const Form = () => {
	const [result, setResult] = useState('');

	console.log(import.meta.env.VITE_SEND_EMAIL);

	const submitForm = async (event) => {
		event.preventDefault();
		setResult('Sending....');
		const formData = new FormData(event.target);

		formData.append('access_key', import.meta.env.VITE_SEND_EMAIL);

		const response = await fetch(import.meta.env.VITE_URL, {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult('Form Submitted Successfully');
			event.target.reset();
		} else {
			console.log('Error', data);
			setResult(data.message);
		}
	};
	return (
		<div className="flex-col items-start">
			<form data-aos="zoom-in" onSubmit={submitForm} action="get">
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
						name="Phone Number"
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
				<Button type="submit" text="Submit Now" bg icon={White_arrow} />
			</form>
		</div>
	);
};

export default Form;
