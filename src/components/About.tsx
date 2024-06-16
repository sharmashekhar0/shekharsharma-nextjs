"use client";
import AOS from "aos";

import React, { useEffect } from "react";

function About() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			// data-aos="zoom-in-up"
			className="min-h-96 flex flex-col gap-8 text-white px-8 sm:px-28 text-justify"
		>
			<span className="text-3xl sm:text-5xl font-bold">About.</span>
			<div className="flex justify-between gap-6 flex-col">
				<span className="text-[#999999] text-lg">
					Hi! I am Shekhar Sharma, and I am from Uttar Pradesh, India.
					I work as a Full Stack Developer at Weavers Infotech, where
					I channel my passion for coding into creating innovative and
					efficient web solutions.
				</span>
				<span className="text-[#999999] text-lg">
					I love to code, solve problems on LeetCode, and develop
					interesting projects that push the boundaries of my
					technical skills. As a proficient web developer, I have an
					extensive knowledge base in HTML, CSS, and JavaScript. My
					expertise is further enhanced by my experience with Tailwind
					CSS, Bootstrap, React.js, and Node.js.
				</span>
				<span className="text-[#999999] text-lg">
					In addition to these front-end technologies, I have a strong
					command of Express and MongoDB, which allows me to build
					robust and scalable back-end systems. My problem-solving
					skills are one of my strongest assets, enabling me to tackle
					complex challenges and deliver high-quality solutions.
				</span>
				<span className="text-[#999999] text-lg">
					When I&apos;m not coding, I enjoy exploring new technologies
					and staying updated with the latest trends in the tech
					world. My dedication to continuous learning and improvement
					drives my success in the ever-evolving field of web
					development.
				</span>
			</div>
		</div>
	);
}

export default About;
