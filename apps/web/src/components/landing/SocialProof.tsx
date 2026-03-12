'use client';

import { motion } from 'framer-motion';

const logos = [
	'Acme Corp',
	'Globex',
	'Initech',
	'Umbrella',
	'Stark Ind',
	'Wayne Co',
];

const SocialProof = () => (
	<section className="border-border border-t py-16">
		<div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
			<motion.p
				className="text-muted-foreground mb-8 text-xs font-semibold uppercase tracking-[0.08em]"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				Trusted by modern teams
			</motion.p>
			<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
				{logos.map((name, i) => (
					<motion.span
						key={name}
						className="text-muted-foreground/50 text-sm font-semibold tracking-wide"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: i * 0.05 }}
					>
						{name}
					</motion.span>
				))}
			</div>
		</div>
	</section>
);

export default SocialProof;
