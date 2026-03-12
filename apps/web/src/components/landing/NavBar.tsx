'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
	{ label: 'Features', href: '#features' },
	{ label: 'AI Assistant', href: '#ai-assistant' },
	{ label: 'Pricing', href: '#pricing' },
	{ label: 'Docs', href: '#' },
];

const Navbar = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<nav className="bg-background/80 border-border fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-lg">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<a
						href="#"
						className="text-foreground text-lg font-semibold tracking-tight"
					>
						MeetAI
					</a>

					<div className="hidden items-center gap-8 md:flex">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
							>
								{link.label}
							</a>
						))}
					</div>

					<div className="hidden items-center gap-3 md:flex">
						<a
							href="#"
							className="text-foreground hover:bg-muted rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
						>
							Sign in
						</a>
						<a
							href="#"
							className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.98]"
						>
							Get Started
						</a>
					</div>

					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className="text-muted-foreground hover:text-foreground p-2 transition-colors md:hidden"
						aria-label="Toggle menu"
					>
						{mobileOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						className="border-border bg-background border-t md:hidden"
					>
						<div className="space-y-3 px-4 py-4">
							{navLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className="text-muted-foreground hover:text-foreground block py-2 text-sm transition-colors"
									onClick={() => setMobileOpen(false)}
								>
									{link.label}
								</a>
							))}
							<div className="border-border space-y-2 border-t pt-3">
								<a
									href="#"
									className="text-foreground block py-2 text-sm font-medium"
								>
									Sign in
								</a>
								<a
									href="#"
									className="bg-primary text-primary-foreground block rounded-lg px-4 py-2.5 text-center text-sm font-medium"
								>
									Get Started
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
