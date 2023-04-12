"use client";
import { useEffect, useState } from "react";

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
		<header
			className={`fixed w-full flex justify-center items-center h-24 z-30 md:bg-opacity-70 transition duration-300 ease-in-out  ${
				!top ? "dark:bg-black bg-white backdrop-blur-sm shadow-lg" : ""
			}`}
		>
			<nav className="flex justify-between items-center w-full px-3 md:px-6 lg:px-10 xl:px-14">
				<div>Hi</div>
				<div className="hidden md:flex items-center">
					<ol className="flex justify-between items-center list-none space-x-9">
						<li className="transition ease-in delay-0">About</li>
						<li className="transition ease-in delay-100">Experience</li>
						<li className="transition ease-in delay-200">Work</li>
						<li className="transition ease-in delay-300">Contact</li>
					</ol>
					<div className="transition ease-in delay-500 ml-9">
						<a className="px-4 py-3 rounded-md border border-lime-400 text-lime-400">
							Resume
						</a>
					</div>
				</div>
				<div className="block md:hidden"></div>
			</nav>
		</header>
	);
}
