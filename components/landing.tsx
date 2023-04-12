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
				<h1 className="font-normal mb-5 ml-1 text-lime-400">Hi, my name is</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.1 }}
			>
				<h2 className="text-3xl md:text-6xl font-semibold mb-2">
					Olutunde Solabi.
				</h2>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<h3 className="text-3xl md:text-6xl font-semibold mb-4 text-gray-400">
					I love building things on the web.
				</h3>
			</motion.div>
			<motion.div
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
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				<a
					className="email-link"
					href="https://www.newline.co/courses/build-a-spotify-connected-app"
					target="_blank"
					rel="noreferrer"
				>
					Check out my course!
				</a>
			</motion.div>
		</section>
	);
}
