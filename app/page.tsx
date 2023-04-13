"use client";
import { Inter } from "next/font/google";
import Landing from "../components/landing";
import About from "@/components/about";
import BackgroundShapes from "@/components/BackgroundShapes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			style={inter.style}
			className="flex min-h-screen flex-col relative items-center justify-between px-6 md:px-12 lg:px-24"
		>
			<BackgroundShapes />
			<Landing />
			<About />
		</main>
	);
}
