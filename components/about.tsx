"use client";

import { motion } from "framer-motion";

export default function About() {
	return (
		<section className="flex justify-center items-start flex-col min-h-screen h-screen max-w-5xl">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0 }}
			>
				<h1 className="font-normal mb-5 ml-1 text-blue-400 flex items-center">
					About Me
					<span className="block w-28 h-[1px] ml-5 bg-gray-300"></span>
				</h1>
			</motion.div>
		</section>
	);
}
