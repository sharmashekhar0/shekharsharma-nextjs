"use client";

import Hero from "@/components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About";
import Contribution from "@/components/Contribution/Contribution";
import "aos/dist/aos.css";
import Marquee from "@/components/Marquee";
import Skills from "@/components/Skills/Skills";
import Contact from "@/pages/Contact/Contact";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ConnectWithMe from "@/components/ConnectWithMe/ConnectWithMe";

export default function Home() {
	return (
		<div className="-z-50 bg-black">
			<BackgroundBeams />
			<div className="relative z-20 ">
				<Header />
				<Hero />
			</div>
			<div className="flex flex-col gap-12 sm:gap-32 mt-8 sm:mt-16 mb-8">
				<Skills />
				<Projects />
				<About />
				{/* <Contact /> */}
				<Contribution />
				{/* <ConnectWithMe /> */}
			</div>
			<Footer />
		</div>
	);
}
