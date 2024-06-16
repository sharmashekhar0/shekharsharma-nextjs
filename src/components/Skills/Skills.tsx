"use client";

import React, { useEffect } from "react";
import AOS from "aos";

function Skills() {
	useEffect(() => {
		AOS.init();
	}, []);

	function generateRandomColor(opacity: number) {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		// Add opacity to the color
		return `${color}${Math.round(opacity * 255).toString(16)}`;
	}

	function generateColorArray(size: number, opacity: number) {
		const colorArray = [];
		for (let i = 0; i < size; i++) {
			colorArray.push(generateRandomColor(opacity));
		}
		return colorArray;
	}

	const colorArray = generateColorArray(50, 0.5);
	console.log(colorArray);

	const frontend = [
		"HTML",
		"CSS",
		"Bootstrap",
		"TailwindCSS",
		"JavaScript",
		"React Js",
		"React Redux",
	];

	const backend = [
		"Express Js",
		"MongoDB",
		"Mongoose",
		"Node Js",
		"Cloudinary",
	];

	const learning = [
		"Next Js",
		"TypeScript",
		"Next Auth",
		"Prisma",
		"Docker",
		"Kubernetes",
		"AWS",
	];

	const database = ["MongoDB", "PostgreSQL"];

	return (
		<div className="h-fit flex flex-col gap-8  text-white px-8 sm:px-28">
			<h2 className="text-3xl sm:text-5xl font-bold">Skills.</h2>
			{/* <div className="flex flex-col text-3xl items-center justify-center">
				<Marquee>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={c}
									alt="C++"
									className="p-2 h-20 max-w-20 object-scale-down"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={cplusplus}
									alt="C++"
									className="p-2 h-20 max-w-20 object-scale-down"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={html}
									alt="C++"
									className="p-2 h-20 max-w-20 object-scale-down"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={css}
									alt="C++"
									className="p-2 h-20 max-w-20 object-scale-down"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={bootstrap}
									alt="C++"
									className="p-2 h-20 max-w-20 object-scale-down"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl flex items-center justify-center font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={tailwind}
									alt="C++"
									className="p-2 h-20 max-w-20 object-scale-down"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={javascript}
									alt="C++"
									className="p-2 h-20 max-w-20 object-scale-down"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={reactjs}
									alt="C++"
									className="p-2 h-20 max-w-20 object-scale-down"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={redux}
									alt="C++"
									className="p-2 h-20 max-w-20 object-scale-down"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={express}
									alt="C++"
									className="scale-150"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={mongodb}
									alt="C++"
									className="p-2 h-20 max-w-20 object-scale-down"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
					<CardContainer className="inter-var mx-2">
						<CardBody className="bg-gray-50 relative group/card flex items-center justify-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-24 h-24 rounded-xl p-6 border  ">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white"
							>
								<Image
									src={node}
									alt="C++"
									className="p-2 h-20 max-w-20 object-scale-down"
								/>
							</CardItem>
						</CardBody>
					</CardContainer>
				</Marquee>
			</div> */}
			<div className="h-fit w-full grid grid-cols-1 sm:grid-cols-4 gap-4">
				<div
					// data-aos="flip-left"
					className="w-full sm:w-[20vw] border border-neutral-900 min-h-40 rounded p-6 bg-zinc-950 flex flex-col gap-2"
				>
					<span className="text-xl font-bold p-2 rounded text-center">
						Frontend.
					</span>
					{frontend?.map((skill, index) => {
						console.log(colorArray[index]);
						return (
							<span
								key={skill}
								className={`bg-[#01010b] font-medium p-2 px-4 rounded text-center w-fit`}
								style={{
									border: `1px solid ${colorArray[index]}`,
								}}
							>
								{skill}
							</span>
						);
					})}
				</div>
				<div
					// data-aos="flip-left"
					className="w-full sm:w-[20vw] border border-neutral-900 min-h-40 rounded p-6 bg-zinc-950 flex flex-col gap-2"
				>
					<span className="text-xl font-bold p-2 rounded text-center">
						Backend.
					</span>
					{backend?.map((skill, index) => {
						console.log(colorArray[index]);
						return (
							<span
								key={skill}
								className={`bg-[#01010b] font-medium p-2 px-4 rounded text-center w-fit`}
								style={{
									border: `1px solid ${
										colorArray[index + frontend.length]
									}`,
								}}
							>
								{skill}
							</span>
						);
					})}
				</div>
				<div
					// data-aos="flip-left"
					className="w-full sm:w-[20vw] border border-neutral-900 min-h-40 rounded p-6 bg-zinc-950 flex flex-col gap-2"
				>
					<span className="text-xl font-bold p-2 rounded text-center">
						Database.
					</span>
					{database?.map((skill, index) => {
						console.log(
							colorArray[index] + frontend.length + backend.length
						);
						return (
							<span
								key={skill}
								className={`bg-[#01010b] font-medium p-2 px-4 rounded text-center w-fit`}
								style={{
									border: `1px solid ${colorArray[index]}`,
								}}
							>
								{skill}
							</span>
						);
					})}
				</div>
				<div
					// data-aos="flip-left"
					className="w-full sm:w-[20vw] border border-neutral-900 min-h-40 rounded p-6 bg-zinc-950 flex flex-col gap-2"
				>
					<span className="text-xl font-bold p-2 rounded text-center">
						Things I&apos;m Learning.
					</span>
					{learning?.map((skill, index) => {
						console.log(
							colorArray[index] +
								frontend.length +
								backend.length +
								database.length
						);
						return (
							<span
								key={skill}
								className={`bg-[#01010b] font-medium p-2 px-4 rounded text-center w-fit`}
								style={{
									border: `1px solid ${colorArray[index]}`,
								}}
							>
								{skill}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Skills;
