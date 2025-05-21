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
					I am a Software Engineer at PayNways, specializing in
					developing enterprise-level applications using AngularJS,
					Angular 19, and Spring Boot. I design and implement scalable
					frontend architectures while also contributing to robust
					backend services and RESTful APIs.
				</span>
				<span className="text-[#999999] text-lg">
					With a strong command over Angular’s reactive forms, RxJS,
					and state management patterns, I build high-performance,
					maintainable UI components. On the server side, I work with
					Spring Boot to create secure, scalable, and efficient
					backend systems integrated with modern databases and
					authentication layers.
				</span>
				<span className="text-[#999999] text-lg">
					My experience spans full-stack development, system design,
					and end-to-end application delivery. I actively apply best
					practices such as modular coding, test-driven development
					(TDD), and CI/CD pipelines to ensure quality and
					maintainability.
				</span>
				<span className="text-[#999999] text-lg">
					I bring a deep understanding of software engineering
					principles, clean architecture, and modern development
					workflows. My focus remains on building production-grade
					solutions that are optimized for performance, security, and
					scalability.
				</span>
			</div>
		</div>
	);
}

export default About;
