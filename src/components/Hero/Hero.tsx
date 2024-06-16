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
				className="hidden sm:flex flex-col px-8 sm:px-28 text-white text-4xl sm:text-[108px] sm:leading-[100px] font-bold
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
			<div className="flex sm:hidden px-8 flex-col text-white w-full text-5xl font-bold">
				<span className="">Hi,</span>
				<span className="">I&apos;m Shekhar</span>

				<span className="">
					<FlipWords className="px-0 mx-0" words={words} />
				</span>
				<span className="">
					Web Developer<span className="text-[#F4C430]">.</span>
				</span>
			</div>
		</div>
	);
}

export default Hero;
