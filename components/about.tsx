"use client";

import AnimatedDiv from "./AnimatedDiv";

export default function About() {
	return (
		<section
			id="about"
			className="flex justify-center items-start flex-col min-h-screen h-screen max-w-5xl"
		>
			<AnimatedDiv>
				<h1 className="font-normal mb-5 ml-1 text-blue-400 flex items-center">
					About Me
					<span className="block w-28 h-[1px] ml-5 bg-gray-300"></span>
				</h1>
				<h2 className="font-semibold text-xl mb-5">Want to know about me?</h2>
				<p>
					Sure, I&apos;d be happy to tell you about myself. I have experience in
					various web development technologies and frameworks, including
					JavaScript, TypeScript, ReactJS, VueJS, NextJS, NodeJS, and ExpressJS.
					I have also worked on mobile app development using React Native and
					have experience with version control using Git and GitHub.
					Additionally, I have experience working with NoSQL databases like
					MongoDB and have utilized the Loopback 4 framework in my projects. I
					am constantly learning and keeping up with the latest trends and
					technologies in the industry, and I am passionate about leveraging my
					skills to create innovative solutions.
				</p>
			</AnimatedDiv>
		</section>
	);
}
