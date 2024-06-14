"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import mern1 from "../../../public/mern1.jpg";
import mern2 from "../../../public/mern2.jpg";
import mern3 from "../../../public/mern3.png";
import mern4 from "../../../public/mern4.jpg";
import mern5 from "../../../public/mern5.png";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAppwrite } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiReacthookform } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

function Projects() {
	useEffect(() => {
		AOS.init();
	}, []);

	const [selectedStack, setSelectedStack] = useState("all");

	const changeSelectedStack = (stack: string) => {
		setSelectedStack(stack);
	};

	const projects = [
		{
			id: 1,
			name: "VideoTube",
			image: mern1,
			description:
				"A full-stack video sharing platform built with the MERN stack.",
			techStack: [
				<FaReact />,
				<FaNode className="text-4xl" />,
				<SiExpress />,
				<SiMongodb />,
			],
			isLive: false,
			url: "",
			tag: ["all", "fullstack"],
		},
		{
			id: 2,
			name: "Personal Portfolio Nextjs",
			image: mern2,
			description: "A dynamic portfolio website developed with Next.js.",
			techStack: [
				<RiNextjsFill className="text-3xl" />,
				<RiTailwindCssFill />,
				<SiTypescript />,
			],
			isLive: true,
			url: "",
			tag: ["all", "frontend"],
		},
		{
			id: 3,
			name: "Todo App",
			image: mern3,
			description:
				"A task management application using the React.js and Appwrite.",
			techStack: [
				<FaReact />,
				<RiTailwindCssFill />,
				<TbBrandRedux />,
				<SiAppwrite />,
			],
			isLive: true,
			url: "",
			tag: ["all", "fullstack"],
		},
		{
			id: 4,
			name: "Personal Portfolio (Old)",
			image: mern4,
			description: "An earlier portfolio version built with React.js.",
			techStack: [
				<FaReact />,
				<RiTailwindCssFill />,
				<IoLogoJavascript />,
			],
			isLive: true,
			url: "",
			tag: ["all", "frontend"],
		},
	];

	return (
		<div className="h-screen flex flex-col gap-8 bg-black text-white px-28">
			<span className="text-5xl font-bold">Projects.</span>
			<div className="w-fit gap-2 flex items-center justify-between bg-[#161616]  h-10 px-4 rmd">
				<span
					className={` px-4 py-1 rmd cursor-pointer ${
						selectedStack === "all"
							? "bg-black text-white"
							: "hover:bg-black hover:text-white"
					}`}
					onClick={() => changeSelectedStack("all")}
				>
					All
				</span>
				<span
					className={` px-4 py-1 rmd cursor-pointer ${
						selectedStack === "frontend"
							? "bg-black text-white"
							: "hover:bg-black hover:text-white"
					}`}
					onClick={() => changeSelectedStack("frontend")}
				>
					Frontend
				</span>
				{/* <span
					className={` px-4 py-1 rmd cursor-pointer ${
						selectedStack === "backend"
							? "bg-black text-white"
							: "hover:bg-black hover:text-white"
					}`}
					onClick={() => changeSelectedStack("backend")}
				>
					Backend
				</span> */}
				<span
					className={` px-4 py-1 rmd cursor-pointer ${
						selectedStack === "fullstack"
							? "bg-black text-white"
							: "hover:bg-black hover:text-white"
					}`}
					onClick={() => changeSelectedStack("fullstack")}
				>
					Full Stack
				</span>
			</div>
			<div className="grid grid-cols-4">
				{projects
					?.filter((project) => {
						return project?.tag?.includes(selectedStack);
					})
					.map((project) => (
						<ProjectCard key={project?.id} project={project} />
					))}
			</div>
			<Link href={"/projects"} prefetch>
				<button className="w-24 text-left underline underline-offset-[6px]">
					Show all
				</button>
			</Link>
		</div>
	);
}

export default Projects;
