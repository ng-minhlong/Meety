'use client';

import { motion } from 'framer-motion';
import { CalendarPlus, UserPlus, Sparkles } from 'lucide-react';

const steps = [
	{
		icon: CalendarPlus,
		title: 'Create or schedule a meeting',
		desc: 'Set up a meeting in seconds with a shareable link or schedule it for later.',
	},
	{
		icon: UserPlus,
		title: 'Invite your team',
		desc: 'Share the link with up to 50 participants. No downloads required.',
	},
	{
		icon: Sparkles,
		title: 'AI captures everything',
		desc: "Our AI takes notes, tracks action items, and generates a summary when you're done.",
	},
];

const ease = [0.32, 0.72, 0, 1] as const;

const HowItWorks = () => (
	<section id="how-it-works" className="bg-muted/40 py-24 sm:py-32">
		<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<motion.div
				className="mb-16 text-center"
				initial={{ opacity: 0, y: 8 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.5, ease }}
			>
				<p className="text-primary mb-3 text-xs font-semibold uppercase tracking-[0.08em]">
					How it works
				</p>
				<h2 className="text-display text-foreground text-3xl sm:text-4xl">
					Three steps to better meetings
				</h2>
			</motion.div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
				{steps.map((s, i) => (
					<motion.div
						key={s.title}
						className="text-center"
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.5, ease, delay: i * 0.08 }}
					>
						<div className="bg-background shadow-card text-primary mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl">
							<s.icon size={24} />
						</div>
						<div className="text-primary mb-2 text-xs font-semibold">
							Step {i + 1}
						</div>
						<h3 className="text-foreground mb-2 text-lg font-medium">
							{s.title}
						</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							{s.desc}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export default HowItWorks;
