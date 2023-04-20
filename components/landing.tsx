"use client";
import { motion } from "framer-motion";

export default function Landing() {
	return (
		<section className="flex justify-center items-start flex-col min-h-screen h-screen max-w-5xl">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0 }}
			>
				<h1 className="font-semibold text-md mb-5 ml-1 text-blue-400">
					Welcome, my name is
				</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				<motion.h2 className="text-3xl md:text-6xl font-semibold mb-2">
					Olutunde Solabi.
				</motion.h2>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<h3 className="text-xl md:text-6xl font-semibold mb-1 text-gray-400">
					Your friendly neighborhood Software Engineer.{" "}
				</h3>
				<p className="text-blue-300 text-sm ml-1">
					Who also happens to like watching anime
				</p>
			</motion.div>
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<p className="lg:max-w-lg text-gray-400">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nam
					dolores voluptate asperiores, tenetur officiis officia et
					reprehenderit quis quia veritatis atque quidem perspiciatis
					repellendus aut ex quas corporis. Repellendus. .
				</p>
			</motion.div> */}
		</section>
	);
}
