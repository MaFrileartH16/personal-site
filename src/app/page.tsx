// app/page.tsx
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import ProjectsSection from "@/components/Projects";
// import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<NavBar/>
			<main>
				<HeroSection/>
				<AboutSection/>
				<ProjectsSection/>
				{/*<ContactSection/>*/}
			</main>
			<Footer/>
		</>
	);
}
