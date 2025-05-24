"use client";

import React from "react";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu as MenuIcon, X as XIcon} from "lucide-react";
import {motion} from "framer-motion";

export default function NavBar() {
	const [open, setOpen] = React.useState(false);
	
	return (
		<motion.header
			className="bg-white shadow sticky top-0 z-50"
			role="banner"
			initial={{y: -50, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{duration: 0.5}}
		>
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<Link href="/" className="text-2xl font-bold">My Portfolio</Link>
				
				{/* Desktop Navigation */}
				<nav className="hidden md:block">
					<NavigationMenu>
						<NavigationMenuList className="flex space-x-6">
							{["Home", "About", "Projects", "Contact"].map((item) => (
								<NavigationMenuItem key={item}>
									<NavigationMenuLink asChild>
										<Link href={`#${item.toLowerCase()}`}>{item}</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</nav>
				
				{/* Mobile Navigation Menggunakan Sheet */}
				<div className="md:hidden">
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" className="p-2">
								{open ? <XIcon size={24}/> : <MenuIcon size={24}/>}
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="w-80">
							<SheetHeader>
								<SheetTitle>Menu</SheetTitle>
							</SheetHeader>
							<motion.div
								className="flex flex-col space-y-4 py-4"
								initial={{opacity: 0}}
								animate={{opacity: 1}}
								transition={{duration: 0.3}}
							>
								{["Home", "About", "Projects", "Contact"].map((item) => (
									<SheetClose asChild key={item}>
										<Link href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
											{item}
										</Link>
									</SheetClose>
								))}
							</motion.div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</motion.header>
	);
}
