'use client';

import { motion } from 'framer-motion';

const ease = [0.32, 0.72, 0, 1] as const;

const FinalCTA = () => (
	<section className="bg-muted/40 py-24 sm:py-32">
		<div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
			<motion.div
				initial={{ opacity: 0, y: 8 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.5, ease }}
			>
				<h2 className="text-display text-foreground text-3xl sm:text-4xl">
					Make every meeting productive.
				</h2>
				<p className="text-muted-foreground mt-4 text-lg">
					Join thousands of teams already using MeetAI to run smarter meetings.
				</p>
				<a
					href="#"
					className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-card mt-8 inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-medium transition-all duration-200 active:scale-[0.98]"
				>
					Start your first meeting
				</a>
			</motion.div>
		</div>
	</section>
);

export default FinalCTA;
