'use client';

import { motion } from 'framer-motion';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
	{
		q: 'Is the AI agent always active?',
		a: "No. The AI agent is opt-in and can be toggled on or off before or during any meeting. You're always in control.",
	},
	{
		q: 'Can I disable AI during meetings?',
		a: 'Yes. You can turn off AI features at any time during a meeting. Notes and summaries will only cover the period the AI was active.',
	},
	{
		q: 'Is the free plan really free?',
		a: 'Absolutely. The free plan includes up to 50 participants, AI notes, and meeting summaries with no credit card required.',
	},
	{
		q: 'How many participants are supported?',
		a: 'The free plan supports up to 50 participants per meeting. The Pro plan has no participant limits.',
	},
];

const ease = [0.32, 0.72, 0, 1] as const;

const FAQ = () => (
	<section className="py-24 sm:py-32">
		<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
			<motion.div
				className="mb-12 text-center"
				initial={{ opacity: 0, y: 8 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.5, ease }}
			>
				<h2 className="text-display text-foreground text-3xl sm:text-4xl">
					Frequently asked questions
				</h2>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 8 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.5, ease, delay: 0.05 }}
			>
				<Accordion type="single" collapsible className="w-full">
					{faqs.map((faq, i) => (
						<AccordionItem
							key={i}
							value={`item-${i}`}
							className="border-border"
						>
							<AccordionTrigger className="text-foreground py-5 text-left text-base font-medium hover:no-underline">
								{faq.q}
							</AccordionTrigger>
							<AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
								{faq.a}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</motion.div>
		</div>
	</section>
);

export default FAQ;
