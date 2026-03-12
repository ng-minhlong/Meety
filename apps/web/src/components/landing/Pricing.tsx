'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
	{
		name: 'Free',
		price: '$0',
		period: 'forever',
		desc: 'For individuals and small teams getting started.',
		features: [
			'Up to 50 participants',
			'AI meeting notes',
			'Meeting summaries',
			'Basic meeting history',
			'Shareable meeting links',
		],
		cta: 'Get Started',
		highlighted: false,
	},
	{
		name: 'Pro',
		price: '$12',
		period: '/user/mo',
		desc: 'For teams that need advanced AI and unlimited access.',
		features: [
			'Everything in Free',
			'Unlimited meetings',
			'Advanced AI summaries',
			'Full meeting transcripts',
			'AI insights & analytics',
			'Priority support',
		],
		cta: 'Start Pro Trial',
		highlighted: true,
	},
];

const ease = [0.32, 0.72, 0, 1] as const;

const Pricing = () => (
	<section id="pricing" className="bg-muted/40 py-24 sm:py-32">
		<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<motion.div
				className="mb-16 text-center"
				initial={{ opacity: 0, y: 8 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.5, ease }}
			>
				<p className="text-primary mb-3 text-xs font-semibold uppercase tracking-[0.08em]">
					Pricing
				</p>
				<h2 className="text-display text-foreground text-3xl sm:text-4xl">
					Simple, transparent pricing
				</h2>
				<p className="text-muted-foreground mt-4 text-lg">
					Start free. Upgrade when you&apos;re ready.
				</p>
			</motion.div>

			<div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
				{plans.map((plan, i) => (
					<motion.div
						key={plan.name}
						className={`bg-card shadow-card rounded-xl p-6 ${plan.highlighted ? 'ring-primary ring-2' : ''}`}
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.5, ease, delay: i * 0.08 }}
					>
						<h3 className="text-foreground text-lg font-medium">{plan.name}</h3>
						<div className="mt-3 flex items-baseline gap-1">
							<span className="text-foreground text-4xl font-semibold tracking-tight">
								{plan.price}
							</span>
							<span className="text-muted-foreground text-sm">
								{plan.period}
							</span>
						</div>
						<p className="text-muted-foreground mt-2 text-sm">{plan.desc}</p>

						<a
							href="#"
							className={`mt-6 block w-full rounded-lg px-5 py-3 text-center text-sm font-medium transition-all duration-200 active:scale-[0.98] ${
								plan.highlighted
									? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-card'
									: 'bg-muted text-foreground hover:bg-border'
							}`}
						>
							{plan.cta}
						</a>

						<ul className="mt-6 space-y-3">
							{plan.features.map((f) => (
								<li
									key={f}
									className="text-muted-foreground flex items-center gap-2.5 text-sm"
								>
									<Check size={16} className="text-primary flex-shrink-0" />
									{f}
								</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export default Pricing;
