"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		// first prevent the default behavior
		e.preventDefault();
		// get the href and remove everything before the hash (#)
		const href = e.currentTarget.href;
		const targetId = href.replace(/.*\#/, "");
		// get the element by id and use scrollIntoView
		const elem = document.getElementById(targetId);
		elem?.scrollIntoView({
			behavior: "smooth",
		});
	};

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
					<Image
						className="rounded-full object-cover h-[45px] w-[45px]"
						src="/avatar.jpg"
						width={45}
						height={45}
						alt="Neil image"
					/>
				</motion.div>
				<div className="hidden md:flex items-center">
					<ol className="flex justify-between items-center list-none space-x-9">
						<motion.li
							initial={{ transitionTimingFunction: "ease-in" }}
							animate={{ transitionTimingFunction: "ease-in" }}
							transition={{ duration: 0.5, delay: 0 }}
						>
							<Link href="/#about" onClick={handleScroll}>
								About
							</Link>
						</motion.li>
						<motion.li
							initial={{ transitionTimingFunction: "ease-in" }}
							animate={{ transitionTimingFunction: "ease-in" }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<Link href="/#about" onClick={handleScroll}>
								Experience
							</Link>
						</motion.li>
						<motion.li className="transition ease-in delay-200">
							{" "}
							<Link href="/#work" onClick={handleScroll}>
								Work
							</Link>
						</motion.li>
						{/* <motion.li className="transition ease-in delay-300">
							<Link href="/#about" onClick={handleScroll}>
								Contact
							</Link>
						</motion.li> */}
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
