"use client";
import AnimatedDiv from "@/components/AnimatedDiv";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import mern1 from "../../../../public/mern1.jpg";
import mern2 from "../../../../public/mern2.jpg";
import mern3 from "../../../../public/mern3.png";
import mern4 from "../../../../public/mern4.jpg";

import { CgArrowLeft, CgArrowLongLeft } from "react-icons/cg";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { useRouter } from "next/navigation";

import cloudinary from "../../../../public/stack/cloudinary.svg";
import html from "../../../../public/stack/html.svg";
import css from "../../../../public/stack/css.svg";
import reactjs from "../../../../public/stack/reactjs.svg";
import tailwindcss from "../../../../public/stack/tailwindcss.svg";
import redux from "../../../../public/stack/redux.svg";
import js from "../../../../public/stack/js.svg";
import node from "../../../../public/stack/nodejs.svg";
import express from "../../../../public/stack/expressjs.svg";
import mongodb from "../../../../public/stack/mongodb.svg";
import mongoose from "../../../../public/stack/mongoose.svg";
import appwrite from "../../../../public/stack/appwrite.svg";
import nextjs from "../../../../public/stack/nextjs.svg";
import typescript from "../../../../public/stack/typescript.svg";

function ProjectDetailPage({ params: { id } }) {
	const router = useRouter();
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
	const project = projects.find((project) => project.id === parseInt(id));

	if (!project) {
		return <div>Project not found</div>;
	}
	return (
		<AnimatedDiv>
			<div className="h-screen flex flex-col gap-8 py-8 bg-black text-white sm:px-28">
				<button onClick={() => router.back()}>
					<CgArrowLeft className="text-3xl text-slate-300 font-bold" />
				</button>
				<div className="flex flex-col gap-8">
					<div className="flex items-center justify-between">
						<span className="text-3xl font-bold">
							{project?.name}
						</span>
						<div className="flex items-center gap-4">
							<span className="bg-slate-300 text-black font-medium px-4 py-2 rounded text-sm cursor-pointer">
								Visit Live
							</span>
							<Link
								href={project?.githubRepoLink}
								target="_blank"
							>
								<span className="border-2 border-neutral-500 px-4 py-2 rounded text-sm cursor-pointer">
									Repository
								</span>
							</Link>
						</div>
					</div>
					<div className="h-[400px] border border-neutral-900 rounded flex items-center px-8">
						<div className="w-[33%] border border-neutral-900 h-fit rounded">
							<Image
								src={project?.image}
								alt={project?.name}
								className="rounded-t"
							/>
							<div className="flex flex-col gap-3 p-4">
								<span className="text-xl">
									Technologies Used
								</span>
								<div className="flex gap-2">
									{project?.techStack?.map(
										(techIcon: any, index) => {
											return (
												<Image
													key={`tech-icon-${index}`}
													src={techIcon}
													alt=""
													className="h-8 w-8"
												/>
											);
										}
									)}
								</div>
							</div>
						</div>
						<div className="h-72 flex flex-col p-4 gap-4">
							<div className="flex items-center gap-4 text-sm">
								{project?.stack?.map((stack, index) => (
									<span
										key={`stack-${index}`}
										className="bg-blue-950 rounded w-fit px-4 p-1"
									>
										{stack}
									</span>
								))}
							</div>
							<span>{project?.description}</span>
							<div>
								<span>Status</span>
								<div className="flex items-center gap-1">
									<GoDotFill className="text-xl" />
									<span>Live</span>
								</div>
							</div>

							<span>Features</span>
						</div>
					</div>
				</div>
			</div>
		</AnimatedDiv>
	);
}

export default ProjectDetailPage;
