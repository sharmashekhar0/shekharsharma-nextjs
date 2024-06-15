"use client";
import React from "react";
import email from "../../../public/social/email.png";
import gfg from "../../../public/social/gfg.svg";
import leetcode from "../../../public/social/leetcode.png";
import linkedin from "../../../public/social/linkedin.svg";
import github from "../../../public/social/github.svg";
import Image from "next/image";
import Link from "next/link";

function ConnectWithMe() {
	const links = {
		email: "mailto:beingperfect76@gmail.com",
		linkedin: "https://www.linkedin.com/in/beingperfect/",
		github: "https://github.com/sharmashekhar0",
		leetcode: "https://leetcode.com/u/YoungLogan/",
		gfg: "https://www.geeksforgeeks.org/user/beingperfect/",
	};

	return (
		<div className="w-1/2 flex items-center justify-center text-white px-28">
			<div className="h-80 w-96 flex flex-col items-center justify-between p-8 border border-neutral-900">
				<span className="text-3xl font-bold">Connect with Me.</span>
				<div className="flex gap-4 items-center">
					<div className="cursor-pointer">
						<Link href={links?.email}>
							<Image
								className="max-h-12"
								src={email}
								alt="Email"
							/>
						</Link>
					</div>
					<div className="cursor-pointer">
						<Link href={links?.linkedin} target="_blank">
							<Image
								className="max-h-12"
								src={linkedin}
								alt="LinkedIn"
							/>
						</Link>
					</div>
					<div className="cursor-pointer bg-slate-200 h-fit rounded">
						<Link href={links?.github} target="_blank">
							<Image
								className="h-9 max-w-9"
								src={github}
								alt="Github"
							/>
						</Link>
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<div className="cursor-pointer">
						<Link href={links?.leetcode} target="_blank">
							<Image
								className="max-h-10 max-w-fit"
								src={leetcode}
								alt="LeetCode"
							/>
						</Link>
					</div>
					<div className="cursor-pointer">
						<Link href={links?.gfg} target="_blank">
							<Image className="max-h-12" src={gfg} alt="GFG" />
						</Link>
					</div>
				</div>
				<Link
					href={links?.email}
					className="border hover:bg-zinc-900 cursor-pointer border-white text-center w-1/2 p-2 text-xl font-medium place-self-center"
				>
					<span>Hire Me</span>
				</Link>
			</div>
		</div>
	);
}

export default ConnectWithMe;
