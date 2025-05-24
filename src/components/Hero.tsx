// src/components/Hero.tsx
"use client";

import React from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {motion} from "framer-motion"; // Pastikan impor benar

export default function Hero() {
	const MotionDiv = motion("div");
	
	return (
		<motion.section
			id="hero"
			aria-label="Introduction"
			className="bg-gray-50 py-16"
			initial={{opacity: 0, scale: 0.95}}
			animate={{opacity: 1, scale: 1}}
			transition={{duration: 0.8}}
		>
			<div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
				{/* Kolom Teks */}
				<MotionDiv
					className="md:w-1/2 text-center md:text-left"
					initial={{x: -50, opacity: 0}}
					animate={{x: 0, opacity: 1}}
					transition={{duration: 0.8}}
				>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Welcome, I'm [Your Name]
					</h1>
					<p className="text-lg md:text-xl mb-6 text-gray-700">
						I create modern, high-performance websites and web applications.
					</p>
					<Button
						variant="default"
						onClick={() => {
							document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
						}}
					>
						Get in Touch
					</Button>
				</MotionDiv>
				
				{/* Kolom Gambar */}
				<MotionDiv
					className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
					initial={{x: 50, opacity: 0}}
					animate={{x: 0, opacity: 1}}
					transition={{duration: 0.8}}
				>
					<div className="relative w-64 h-64 rounded-full overflow-hidden">
						<Image
							src="/profile.jpg"
							alt="Profile picture of [Your Name]"
							fill
							priority
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>
				</MotionDiv>
			</div>
		</motion.section>
	);
}
