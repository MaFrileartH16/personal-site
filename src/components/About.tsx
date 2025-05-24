// components/AboutSection.tsx
"use client";

import React from "react";
import {motion} from "framer-motion";

export default function About() {
	return (
		<motion.section
			id="about"
			aria-label="About Me"
			className="py-16 bg-white"
			initial={{opacity: 0, y: 50}}
			animate={{opacity: 1, y: 0}}
			transition={{duration: 0.6}}
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
					About Me
				</h2>
				<div className="max-w-3xl mx-auto text-center text-gray-700">
					<p className="text-lg mb-4">
						I'm [Your Name], a passionate web developer who thrives on building scalable, accessible, and
						performance-optimized digital experiences.
					</p>
					<p className="text-lg mb-4">
						My expertise includes modern technologies like Next.js, React, and Tailwind CSS.
					</p>
				</div>
			</div>
		</motion.section>
	);
}
