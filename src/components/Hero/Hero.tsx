"use client";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import { FollowerPointerCard } from "../ui/following-pointer";

import Marquee from "react-fast-marquee";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Banner from "@/components/Banner";

import { FlipWords } from "../ui/flip-words";

function Hero() {
	const words = ["Frontend", "Backend", "Full Stack"];
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="h-[calc(100vh-80px)] z-20 flex items-center w-full">
			<div
				className="flex flex-col px-8 sm:px-28 text-white text-4xl sm:text-[108px] sm:leading-[100px] font-bold
"
			>
				<span className="">Hi,</span>
				<span className="">I&apos;m Shekhar</span>
				{/* <FollowerPointerCard
					title={
						<TitleComponent
							title={blogContent.author}
							avatar={blogContent.authorAvatar}
						/>
					}
					className="flex flex-col"
				> */}
				<span className="">
					<FlipWords className="px-0 mx-0" words={words} />
				</span>
				<span className="">
					Web Developer<span className="text-[#F4C430]">.</span>
				</span>
				{/* </FollowerPointerCard> */}
			</div>
			{/* <BackgroundBeams /> */}
		</div>
		// <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
		// 	<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
		// 	<div>
		// 		<span className="text-white text-7xl font-semibold">Full Stack Developer</span>
		// 	</div>
		// 	{/* <div className="bg-black h-20 flex items-center border-t border-b border-neutral-600 w-full">
		// 		<Marquee loop={0} className="overflow-hidden h-full">
		// 			<div className="flex justify-between">
		// 				<span className="text-white text-5xl font-bold">
		// 					FULL STACK WEB DEVELOPER FULL STACK WEB DEVELOPER
		// 					FULL STACK WEB DEVELOPER{" "}
		// 				</span>
		// 			</div>
		// 		</Marquee>
		// 	</div> */}
		// </div>
	);
}

const blogContent = {
	slug: "amazing-tailwindcss-grid-layouts",
	author: "Manu Arora",
	date: "28th March, 2023",
	title: "Amazing Tailwindcss Grid Layout Examples",
	description:
		"Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
	image: "/demo/thumbnail.png",
	authorAvatar: "/manu.png",
};

const TitleComponent = ({
	title,
	avatar,
}: {
	title: string;
	avatar: string;
}) => (
	<div className="flex space-x-2 items-center">
		<Image
			src={avatar}
			height="20"
			width="20"
			alt="thumbnail"
			className="rounded-full border-2 border-white"
		/>
		<p>{title}</p>
	</div>
);

export default Hero;
