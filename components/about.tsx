"use client";

import AnimatedDiv from "./AnimatedDiv";

export default function About() {
	return (
		<section
			id="about"
			className="flex justify-center items-start flex-col min-h-screen max-w-5xl"
		>
			<AnimatedDiv>
				<h1 className="font-normal mb-5 ml-1 text-blue-400 flex items-center">
					About Me
					<span className="block w-28 h-[1px] ml-5 bg-gray-300"></span>
				</h1>
				<h2 className="font-semibold text-xl mb-5">Want to know about me?</h2>
				<p className="mb-5">
					I’m Olutunde Solabi, a frontend-focused software engineer passionate
					about building intuitive and high-performing web applications. With
					expertise in React.js, Vue.js, TypeScript, and Next.js, I specialize
					in creating dynamic and user-friendly interfaces that enhance user
					experience.
				</p>
				<p className="mb-5">
					I have a strong track record of delivering scalable and maintainable
					frontend solutions, collaborating closely with UX/UI designers and
					product managers to translate complex business requirements into
					seamless interfaces. At OpenDesk, I developed sophisticated
					applications using React and TypeScript, focusing on reusable
					components and well-tested code, which significantly improved
					debugging efficiency.
				</p>
				<p className="mb-5">
					Previously, at Spursmb, I integrated Azure OpenAI services, automated
					notifications, and optimized data storage, enhancing the platform’s
					overall performance. My experience spans working with Tailwind CSS,
					Material UI, Ant Design, and Redux, ensuring that designs are both
					functional and visually appealing.
				</p>
				<p>
					Beyond coding, I thrive in cross-functional collaboration, agile
					environments, and driving projects to completion ahead of deadlines.
					I’m always eager to learn new technologies and push the boundaries of
					frontend development. Let’s build something great! 🚀
				</p>
			</AnimatedDiv>
		</section>
	);
}
