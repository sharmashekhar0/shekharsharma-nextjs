import Banner from "@/components/Banner";
import ConnnectWithMe from "@/components/ConnectWithMe/ConnectWithMe";
import ContactForm from "@/components/ContactForm/ContactForm";
import React from "react";

function Contact() {
	return (
		<div className="h-fit flex items-center">
			<ConnnectWithMe />
			<ContactForm />
		</div>
	);
}

export default Contact;
