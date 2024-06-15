import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Experience from "@/pages/Experience/Experience";
import React from "react";

function page() {
	return (
		<div className="bg-black">
			<Header />
			<Experience />
			<Footer />
		</div>
	);
}

export default page;
