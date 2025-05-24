"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

const projects = [
	{id: 1, title: "Project One", image: "/project1.jpg", link: "https://example.com/project1"},
	{id: 2, title: "Project Two", image: "/project2.jpg", link: "https://example.com/project2"},
];

export default function Projects() {
	return (
		<section id="projects" className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					{projects.map((project) => (
						<motion.div
							key={project.id}
							className="bg-white shadow-md rounded-lg overflow-hidden"
							initial={{opacity: 0, y: 50}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: project.id * 0.2}}
						>
							<Link href={project.link} target="_blank">
								<Image src={project.image} alt={project.title} width={400} height={300} className="object-cover"/>
								<h3 className="text-lg font-bold p-4">{project.title}</h3>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
