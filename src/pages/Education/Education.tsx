"use client";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AnimatedDiv from "@/components/AnimatedDiv";

import React from "react";

const Education = () => {
	const Education = [
		{
			Date: "2021-2023",
			title: "Master of Computer Applications",
			School: "Kamla Nehru Institute of Technology",
			location: "Sultanpur, Uttar Pradesh",
			description: "Graduated Matricuation",
			bg: "#FF7F11",
		},
		{
			Date: "2017 - 2020",
			title: "Bachelor of Computer Applications",
			School: "Swami Shukdevanand Post Graduate College",
			location: "Shahjahanpur, Uttar Pradesh",
			description: "Graduated Matricuation",
			bg: "#387ADF",
		},
		{
			Date: "2015 - 2017",
			title: "Intermediate - 12th",
			School: "B S Public School",
			location: "Shahjahanpur, Uttar Pradesh",
			description: "Graduated Matricuation",
			bg: "#0C0F0A",
		},
		{
			Date: "2013 - 2015",
			title: "Matriculation - 10th",
			School: "B S Public School",
			location: "Shahjahanpur, Uttar Pradesh",
			description: "Graduated Matricuation",
			bg: "#800020",
		},
	];

	return (
		<div className="p-6">
			{/* <p className="text-xs opacity-45 text-center mb-4">{`(This page is still in development. Content may not be accurate.)`}</p> */}
			<p className="text-center text-white text-2xl sm:text-3xl mb-6 font-extrabold  md:no-underline underline-offset-8 decoration-[#F11A7B]">
				Education
			</p>
			<AnimatedDiv>
				<VerticalTimeline
					className="opacity-95"
					animate={false}
					lineColor="#262626"
				>
					{Education.map((e, i) => (
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

export default Education;
