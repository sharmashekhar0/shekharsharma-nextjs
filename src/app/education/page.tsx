import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Education from "@/pages/Education/Education";
import React from "react";

function page() {
	return (
		<div className="bg-black">
			<Header />
			<Education />
			<Footer />
		</div>
	);
}

export default page;
