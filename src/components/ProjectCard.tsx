"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import AnimatedDiv from "./AnimatedDiv";

import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project, className = "w-[20vw]" }: any) {
	console.log(project);
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			// data-aos="flip-left"
			className={`min-h-[460px] pb-2 relative border border-neutral-900 ${className} rounded`}
		>
			<Link key={project?.id} href={`/projects/${project?.id}`} prefetch>
				<div className="h-[55%] bg-zinc-900 rounded-t">
					<Image
						src={project?.image}
						alt={project?.name}
						className="object-cover h-full rounded-t"
					/>
				</div>
				<div className="h-[45%] py-4 px-4 flex flex-col gap-2 justify-between">
					<span className="font-medium">{project.name}</span>
					<p className="">{project.description}</p>
					<div className="flex justify-between items-center h-12">
						<div className="flex gap-2 flex-wrap">
							{project?.techStack?.map(
								(techIcon: any, index: number) => {
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
