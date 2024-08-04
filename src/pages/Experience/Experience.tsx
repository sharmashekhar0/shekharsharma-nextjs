"use client";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AnimatedDiv from "@/components/AnimatedDiv";

import React from "react";

const Experience = () => {
	const Experience = [
		{
			Date: "Aug 2023-Present",
			title: "Full Stack Developer (MERN)",
			School: "Weavers Infotech",
			location: "Kanpur, Uttar Pradesh",
			description: "Graduated Matricuation",
			bg: "#FF7F11",
		},
	];

	return (
		<div className="p-6 h-screen">
			<p className="text-center text-white text-2xl sm:text-3xl mb-6 font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
				Experience
			</p>
			<AnimatedDiv>
				<VerticalTimeline
					className="opacity-95"
					animate={false}
					lineColor="#262626"
				>
					{Experience.map((e, i) => (
						<VerticalTimelineElement
							key={i}
							visible={true}
							className="vertical-timeline-element--work"
							contentStyle={{ background: e.bg, color: "#fff" }}
							contentArrowStyle={{
								borderRight: `7px solid  ${e.bg}`,
							}}
							date={e.Date}
							iconStyle={{ background: e.bg, color: "#fff" }}
							icon={""}
						>
							<h3 className="vertical-timeline-element-title">
								{e.title}
							</h3>
							<h4 className="vertical-timeline-element-subtitle">
								{e.location}
							</h4>
							<p>{e.School}</p>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</AnimatedDiv>
		</div>
	);
};

export default Experience;
