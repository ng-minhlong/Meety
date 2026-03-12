'use client';

import { motion } from 'framer-motion';
import {
	FileText,
	BarChart3,
	Bot,
	Users,
	CalendarDays,
	Clock,
} from 'lucide-react';

const features = [
	{
		icon: FileText,
		title: 'AI Meeting Notes',
		desc: 'Automatically capture important points during meetings so you never miss anything.',
	},
	{
		icon: BarChart3,
		title: 'AI Meeting Summaries',
		desc: 'Get instant summaries after every meeting with key decisions and takeaways.',
	},
	{
		icon: Bot,
		title: 'AI Meeting Agent',
		desc: 'Invite an AI agent into the meeting to answer questions, provide insights, or assist discussions.',
	},
	{
		icon: Users,
		title: 'Up to 50 Participants',
		desc: 'Host meetings with up to 50 people on the free plan. No compromises.',
	},
	{
		icon: CalendarDays,
		title: 'Meeting Scheduling',
		desc: 'Create and schedule meetings easily with shareable links and calendar integrations.',
	},
	{
		icon: Clock,
		title: 'Meeting History',
		desc: 'Access recordings, notes, and summaries anytime from your personal archive.',
	},
];

const ease = [0.32, 0.72, 0, 1] as const;

const Features = () => (
	<section id="features" className="py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<motion.div
				className="mx-auto mb-16 max-w-2xl text-center"
				initial={{ opacity: 0, y: 8 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.5, ease }}
			>
				<p className="text-primary mb-3 text-xs font-semibold uppercase tracking-[0.08em]">
					Features
				</p>
				<h2 className="text-display text-foreground text-3xl sm:text-4xl">
					Everything you need for better meetings
				</h2>
				<p className="text-muted-foreground mt-4 text-lg">
					Powerful tools that work together so your team can focus on what
					matters.
				</p>
			</motion.div>

			<motion.div
				className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-100px' }}
				variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
			>
				{features.map((f) => (
					<motion.div
						key={f.title}
						className="bg-card shadow-card hover:shadow-card-hover group cursor-default rounded-xl p-6 transition-all duration-200 hover:-translate-y-1"
						variants={{
							hidden: { opacity: 0, y: 8 },
							visible: { opacity: 1, y: 0 },
						}}
						transition={{ duration: 0.5, ease }}
					>
						<div className="bg-primary/10 text-primary group-hover:bg-primary/15 mb-4 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200">
							<f.icon size={20} />
						</div>
						<h3 className="text-foreground mb-2 text-base font-medium">
							{f.title}
						</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							{f.desc}
						</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	</section>
);

export default Features;
