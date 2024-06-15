import React from "react";

function ContactForm() {
	return (
		<div className="w-1/2 text-white sm:px-28">
			<span className="text-5xl font-bold">Contact Form.</span>
			<div className="flex flex-col min-h-96 gap-6 py-8">
				<input
					type="text"
					placeholder="Your Full Name"
					className="h-14 p-4 rounded bg-zinc-950 font-medium"
				/>
				<input
					type="text"
					placeholder="Your Email Address"
					className="h-14 p-4 rounded bg-zinc-950 font-medium"
				/>
				<textarea
					name=""
					id=""
					placeholder="Your Message"
					className="h-48 resize-none p-4 rounded bg-zinc-950 font-medium"
				></textarea>
				<button className="h-14 p-4 rounded bg-blue-950 hover:bg-blue-900 font-medium">
					Send Message
				</button>
			</div>
		</div>
	);
}

export default ContactForm;
