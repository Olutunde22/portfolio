"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedDiv({
	children,
}: {
	children: React.ReactNode;
}) {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0 }}
			animate={{ opacity: isInView ? 1 : 0 }}
			transition={{ duration: 0.5, delay: 0 }}
		>
			{children}
		</motion.div>
	);
}
