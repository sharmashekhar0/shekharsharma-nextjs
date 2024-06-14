"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import AnimatedDiv from "./AnimatedDiv";

import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }: any) {
	console.log(project);
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			// data-aos="flip-left"
			className="min-h-96 pb-2 relative border border-neutral-900 w-[20vw] rmd"
		>
			<Link key={project?.id} href={`/projects/${project?.id}`} prefetch>
				<div className="h-[55%] bg-zinc-900 rtmd">
					<Image
						src={project?.image}
						alt={project?.name}
						className="object-cover h-full rtmd"
					/>
				</div>
				<div className="h-[45%] py-2 px-4 flex flex-col gap-2 justify-between">
					<span className="font-medium">{project.name}</span>
					<p className="">{project.description}</p>
					<div className="flex justify-between items-center h-12">
						<div className="flex items-center gap-2">
							{project?.techStack?.map((techIcon: any) => (
								<div className="text-white text-2xl font-bold flex items-center justify-center">
									{techIcon}
								</div>
							))}
						</div>
						{/* {project.isLive ? (
							<span className="text-2xl text-slate-300 cursor-pointer">
								<FiExternalLink />
							</span>
						) : null} */}
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ProjectCard;
