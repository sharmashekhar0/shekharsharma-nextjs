"use client";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { useState } from "react";
import "animate.css";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const closeMenu = () => {
		setIsAnimating(true);
		setTimeout(() => {
			setIsMenuOpen(false);
			setIsAnimating(false);
		}, 500); // Duration of the animation
	};

	return (
		<div className="h-fit border-neutral-600 text-white flex items-center justify-between px-8 sm:px-28 pt-8">
			<Link href={"/"} prefetch>
				<span className="text-7xl sm:text-6xl font-bold text-white">
					S<span className="text-[#F4C430]">.</span>
				</span>
			</Link>
			<div className="hidden sm:flex w-1/3 justify-between font-medium text-md items-center">
				<Link href={"/"} prefetch>
					<span className="cursor-pointer font-medium hover:text-[#F4C430]">
						Home
					</span>
				</Link>
				<Link href={"/experience"} prefetch>
					<span className="cursor-pointer font-medium hover:text-[#F4C430]">
						Experience
					</span>
				</Link>
				<Link href={"/projects"} prefetch>
					<span className="cursor-pointer font-medium hover:text-[#F4C430]">
						Projects
					</span>
				</Link>
				<Link href={"/education"} prefetch>
					<span className="cursor-pointer font-medium hover:text-[#F4C430]">
						Education
					</span>
				</Link>
			</div>
			{/* <span className="cursor-pointer font-medium hover:text-[#F4C430] bg-red-900 p-1 px-4 rounded border border-neutral-400">
					Resume
				</span> */}
			<a
				href="/Shekhar_Sharma_Experienced_2024.pdf"
				target="_blank"
				download="Shekhar_Sharma_Experienced_2024"
				className="hidden sm:block"
			>
				<button className="button" type="button">
					<span className="button__text">Resume</span>
					<span className="button__icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 35 35"
							id="bdd05811-e15d-428c-bb53-8661459f9307"
							data-name="Layer 2"
							className="svg"
						>
							<path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
							<path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
							<path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
						</svg>
					</span>
				</button>
			</a>
			<IoMenu
				className="text-2xl sm:hidden text-slate-100 hover:text-zinc-300"
				onClick={() => setIsMenuOpen(true)}
			/>
			{isMenuOpen && (
				<div
					className={`h-screen w-screen fixed top-0 right-0 flex justify-end z-50 bg-zinc-950 bg-opacity-40 animate__animated ${
						isAnimating
							? "animate__slideOutRight"
							: "animate__slideInRight"
					} `}
				>
					<div className=" h-screen w-4/5 bg-black flex flex-col justify-between">
						<div className="flex flex-col h-full">
							<div className="h-16 flex items-center justify-end px-4">
								<IoClose
									className="text-2xl"
									onClick={closeMenu}
								/>
							</div>
							<div className="px-8 flex flex-col gap-4 p-4">
								<Link
									href={"/"}
									prefetch
									className="flex gap-2 items-center"
								>
									<FaHome />
									<span className="cursor-pointer font-medium hover:text-[#F4C430]">
										Home
									</span>
								</Link>
								<Link
									href={"/experience"}
									prefetch
									className="flex gap-2 items-center"
								>
									<MdWork />
									<span className="cursor-pointer font-medium hover:text-[#F4C430]">
										Experience
									</span>
								</Link>
								<Link
									href={"/projects"}
									prefetch
									className="flex gap-2 items-center"
								>
									<AiFillProject />
									<span className="cursor-pointer font-medium hover:text-[#F4C430]">
										Projects
									</span>
								</Link>
								<Link
									href={"/education"}
									prefetch
									className="flex gap-2 items-center"
								>
									<IoMdSchool />
									<span className="cursor-pointer font-medium hover:text-[#F4C430]">
										Education
									</span>
								</Link>
							</div>
						</div>
						<div className="w-full  h-1/4 flex items-center justify-center">
							<a
								href="/Shekhar_Sharma_Experienced_2024.pdf"
								target="_blank"
								download="Shekhar_Sharma_Experienced_2024"
								className=""
							>
								<button className="button" type="button">
									<span className="button__text">Resume</span>
									<span className="button__icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 35 35"
											id="bdd05811-e15d-428c-bb53-8661459f9307"
											data-name="Layer 2"
											className="svg"
										>
											<path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
											<path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
											<path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
										</svg>
									</span>
								</button>
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
