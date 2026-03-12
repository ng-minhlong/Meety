'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import MeetingMockup from './MeetingMockup';

const ease = [0.32, 0.72, 0, 1] as const;

const Hero = () => (
	<section className="pb-24 pt-32 sm:pb-32 sm:pt-40">
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<motion.div
				className="mx-auto max-w-3xl text-center"
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease }}
			>
				<h1
					className="text-display text-foreground"
					style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
				>
					Smarter Meetings, Captured.
				</h1>
				<p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
					Our AI co-pilot joins your meetings to automatically transcribe,
					summarize, and track action items. Focus on the conversation, not the
					note-taking.
				</p>
				<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<a
						href="#"
						className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-card inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-all duration-200 active:scale-[0.98] sm:w-auto"
					>
						Start a Meeting
					</a>
					<a
						href="#how-it-works"
						className="text-foreground hover:bg-muted inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium transition-all duration-200 active:scale-[0.98] sm:w-auto"
					>
						<Play size={16} />
						See how it works
					</a>
				</div>
			</motion.div>

			<motion.div
				className="mt-20"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease, delay: 0.15 }}
			>
				<MeetingMockup />
			</motion.div>
		</div>
	</section>
);

export default Hero;
