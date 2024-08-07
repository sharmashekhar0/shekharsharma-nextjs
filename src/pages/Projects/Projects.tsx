"use client";

import AnimatedDiv from "@/components/AnimatedDiv";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import React, { useState } from "react";

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

import cloudinary from "../../../public/stack/cloudinary.svg";
import html from "../../../public/stack/html.svg";
import css from "../../../public/stack/css.svg";
import reactjs from "../../../public/stack/reactjs.svg";
import tailwindcss from "../../../public/stack/tailwindcss.svg";
import redux from "../../../public/stack/redux.svg";
import js from "../../../public/stack/js.svg";
import node from "../../../public/stack/nodejs.svg";
import express from "../../../public/stack/expressjs.svg";
import mongodb from "../../../public/stack/mongodb.svg";
import mongoose from "../../../public/stack/mongoose.svg";
import appwrite from "../../../public/stack/appwrite.svg";
import nextjs from "../../../public/stack/nextjs.svg";
import typescript from "../../../public/stack/typescript.svg";

function Projects() {
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
				js,
				reactjs,
				tailwindcss,
				redux,
				cloudinary,
				node,
				express,
				mongodb,
			],
			stack: ["Full Stack"],
			isLive: false,
			url: "",
			githubRepoLink: "https://github.com/sharmashekhar0/VideoTube",
			tag: ["all", "fullstack"],
		},
		{
			id: 2,
			name: "Personal Portfolio Nextjs",
			image: mern2,
			description: "A dynamic portfolio website developed with Next.js.",
			techStack: [nextjs, tailwindcss, typescript],
			stack: ["Frontend"],
			isLive: true,
			url: "",
			githubRepoLink:
				"https://github.com/sharmashekhar0/shekharsharma-nextjs",
			tag: ["all", "frontend"],
		},
		{
			id: 3,
			name: "Todo App",
			image: mern3,
			description:
				"A task management application using the React.js and Appwrite.",
			techStack: [js, reactjs, tailwindcss, redux, appwrite],
			stack: ["Frontend", , "Backend as a Service"],
			isLive: true,
			url: "",
			githubRepoLink: "https://github.com/sharmashekhar0/TodoApp",
			tag: ["all", "fullstack"],
		},
		{
			id: 4,
			name: "Personal Portfolio (Old)",
			image: mern4,
			description: "An earlier portfolio version built with React.js.",
			techStack: [reactjs, tailwindcss, js],
			stack: ["Frontend"],
			isLive: true,
			url: "",
			githubRepoLink:
				"https://github.com/sharmashekhar0/portfolio-reactjs",
			tag: ["all", "frontend"],
		},
	];

	return (
		<div className="p-6 min-h-screen flex flex-col gap-8 bg-black text-white px-8 sm:px-28">
			<p className="text-center text-white text-2xl sm:text-3xl mb-6 font-extrabold md:no-underline underline-offset-8 decoration-[#F11A7B]">
				Projects
			</p>
			<AnimatedDiv>
				<div className="min-h-screen flex flex-col gap-8 bg-black text-white ">
					{/* <span className="text-3xl sm:text-5xl font-bold">
						Projects.
					</span> */}
					<div className="w-fit gap-2 flex items-center justify-between text-sm sm:text-base bg-[#161616] h-10 sm:min-h-11 px-4 rounded">
						<span
							className={` px-2 sm:px-4 py-1 rounded cursor-pointer ${
								selectedStack === "all"
									? "bg-black text-white"
									: "hover:bg-black hover:text-white"
							}`}
							onClick={() => changeSelectedStack("all")}
						>
							All
						</span>
						<span
							className={` px-2 sm:px-4 py-1 rounded cursor-pointer ${
								selectedStack === "frontend"
									? "bg-black text-white"
									: "hover:bg-black hover:text-white"
							}`}
							onClick={() => changeSelectedStack("frontend")}
						>
							Frontend
						</span>
						{/* <span
					className={` px-2 sm:px-4 py-1 rounded cursor-pointer ${
						selectedStack === "backend"
							? "bg-black text-white"
							: "hover:bg-black hover:text-white"
					}`}
					onClick={() => changeSelectedStack("backend")}
				>
					Backend
				</span> */}
						<span
							className={` px-2 sm:px-4 py-1 rounded cursor-pointer ${
								selectedStack === "fullstack"
									? "bg-black text-white"
									: "hover:bg-black hover:text-white"
							}`}
							onClick={() => changeSelectedStack("fullstack")}
						>
							Full Stack
						</span>
					</div>
					{/* <div className="grid grid-cols-4">
				{projects
					?.filter((project) => {
						return project?.tag?.includes(selectedStack);
					})
					.map((project) => (
						<ProjectCard key={project?.id} project={project} />
					))}
			</div> */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
						{projects
							?.filter((project) => {
								return project?.tag?.includes(selectedStack);
							})
							.map((project) => (
								<ProjectCard
									key={project?.id}
									project={project}
									className={"30vw"}
								/>
							))}
					</div>
					{/* <Link href={"/projects"} prefetch>
						<button className="w-24 text-left underline underline-offset-[6px]">
							Show all
						</button>
					</Link> */}
				</div>
			</AnimatedDiv>
		</div>
	);
}

export default Projects;
