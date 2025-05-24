// components/Footer.tsx
import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-100 py-6" role="contentinfo">
			<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
				{/* Informasi Hak Cipta */}
				<p className="text-sm text-gray-400">
					&copy; {new Date().getFullYear()} Muhammad Fauzul Hanif. All rights reserved.
				</p>
				
				{/* Navigasi & Sosial Media */}
				<nav className="flex space-x-4 mt-4 md:mt-0" aria-label="Footer Navigation">
					<Link href="#hero" className="text-gray-300 hover:text-white">
						Home
					</Link>
					<Link href="#about" className="text-gray-300 hover:text-white">
						About
					</Link>
					<Link href="#projects" className="text-gray-300 hover:text-white">
						Projects
					</Link>
					<Link href="#contact" className="text-gray-300 hover:text-white">
						Contact
					</Link>
				</nav>
			</div>
		</footer>
	);
}
