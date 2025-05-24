// app/layout.tsx
import "@/app/globals.css";
import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
	title: "My Portfolio - Muhammad Fauzul Hanif",
	description:
		"Personal portfolio website of Muhammad Fauzul Hanif, a professional web developer specializing in high-performance, accessible and SEO-friendly web applications.",
	openGraph: {
		title: "My Portfolio - Muhammad Fauzul Hanif",
		description:
			"Explore the projects and experience of Muhammad Fauzul Hanif, a web developer dedicated to creating fast, accessible, and SEO-optimized digital experiences.",
		url: "https://yourdomain.com", // Ganti dengan domain asli
		siteName: "My Portfolio",
		images: [
			{
				url: "https://yourdomain.com/og-image.jpg", // Ganti dengan URL gambar OG yang sesuai
				width: 1200,
				height: 630,
				alt: "My Portfolio by Muhammad Fauzul Hanif",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "My Portfolio - [Your Name]",
		description: "Personal portfolio of [Your Name], a professional web developer.",
		images: ["https://yourdomain.com/og-image.jpg"],
	},
	alternates: {
		canonical: "https://yourdomain.com",
	},
	robots: {
		index: true,
		follow: true,
	},
	keywords: [
		"portfolio",
		"web developer",
		"[Your Name]",
		"Next.js",
		"SEO-friendly",
		"high performance",
	],
};

export default function RootLayout({
	                                   children,
                                   }: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
		<body>{children}</body>
		</html>
	);
}
