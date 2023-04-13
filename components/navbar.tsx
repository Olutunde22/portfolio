"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
	const [top, setTop] = useState(false);

	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<motion.header
			initial={{ transitionTimingFunction: "ease-in" }}
			animate={{ transitionTimingFunction: "ease-out" }}
			transition={{ duration: 0.3, delay: 0 }}
			className={`fixed w-full flex justify-center items-center h-24 z-30 md:bg-opacity-70 transition duration-300 ease-in-out  ${
				!top ? "backdrop-blur-sm shadow-lg" : ""
			}`}
		>
			<nav className="flex justify-between items-center w-full px-3 md:px-6 lg:px-10 xl:px-14">
				<motion.div
					animate={{ scale: 1.5 }}
					transition={{
						type: "spring",
						damping: 1,
						delay: 1,
						repeat: 1,
					}}
				>
					Hi
				</motion.div>
				<div className="hidden md:flex items-center">
					<ol className="flex justify-between items-center list-none space-x-9">
						<motion.li
							initial={{ transitionTimingFunction: "ease-in" }}
							animate={{ transitionTimingFunction: "ease-in" }}
							transition={{ duration: 0.5, delay: 0 }}
						>
							About
						</motion.li>
						<motion.li
							initial={{ transitionTimingFunction: "ease-in" }}
							animate={{ transitionTimingFunction: "ease-in" }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							Experience
						</motion.li>
						<motion.li className="transition ease-in delay-200">Work</motion.li>
						<motion.li className="transition ease-in delay-300">
							Contact
						</motion.li>
					</ol>
					<motion.div
						animate={{ scale: 1.1 }}
						transition={{
							type: "spring",
							damping: 3,
							delay: 1,
							repeat: Infinity,
						}}
						className="ml-9"
					>
						<a
							href="/Olutunde_Solabi_Resume.pdf"
							className="px-4 py-3 rounded-md border border-blue-400 text-blue-400"
						>
							Click Me!
						</a>
					</motion.div>
				</div>
				<div className="block md:hidden"></div>
			</nav>
		</motion.header>
	);
}
