'use client';

import { motion } from 'framer-motion';
import { Bot, Mic, FileText, CheckCircle2 } from 'lucide-react';

const ease = [0.32, 0.72, 0, 1] as const;

const capabilities = [
	{ icon: Mic, text: 'Listens and transcribes in real-time' },
	{ icon: FileText, text: 'Answers questions during the meeting' },
	{ icon: CheckCircle2, text: 'Summarizes discussions and tracks decisions' },
];

const AIAssistant = () => (
	<section id="ai-assistant" className="py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
				<motion.div
					initial={{ opacity: 0, y: 8 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.5, ease }}
				>
					<p className="text-primary mb-3 text-xs font-semibold uppercase tracking-[0.08em]">
						AI Assistant
					</p>
					<h2 className="text-display text-foreground text-3xl sm:text-4xl">
						Your AI teammate in every meeting
					</h2>
					<p className="text-muted-foreground mt-4 text-lg leading-relaxed">
						The AI agent listens to your meeting, answers questions, summarizes
						discussions, and helps clarify decisions — so nothing falls through
						the cracks.
					</p>
					<div className="mt-8 space-y-4">
						{capabilities.map((c) => (
							<div key={c.text} className="flex items-center gap-3">
								<div className="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
									<c.icon size={16} />
								</div>
								<span className="text-foreground text-sm">{c.text}</span>
							</div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6, ease, delay: 0.1 }}
				>
					<div
						className="shadow-elevated bg-card rounded-xl p-6"
						style={{
							outline: '1px solid hsl(0 0% 0% / 0.1)',
							outlineOffset: '-1px',
						}}
					>
						<div className="mb-6 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Bot size={20} className="text-primary" />
								<span className="text-foreground font-medium">AI Agent</span>
							</div>
							{/* Toggle */}
							<div className="flex items-center gap-2">
								<span className="text-muted-foreground text-xs">OFF</span>
								<div className="bg-primary relative h-6 w-11 cursor-pointer rounded-full">
									<div className="bg-primary-foreground absolute right-0.5 top-0.5 h-5 w-5 rounded-full shadow-sm" />
								</div>
								<span className="text-foreground text-xs font-medium">ON</span>
							</div>
						</div>
						<div className="space-y-3">
							<div className="bg-muted/60 rounded-lg p-3">
								<p className="text-muted-foreground mb-1 text-xs">
									Listening...
								</p>
								<p className="text-foreground text-sm">
									&quot;We should push the deadline to next Friday to allow for
									QA testing.&quot;
								</p>
							</div>
							<div className="bg-primary/5 border-primary/10 rounded-lg border p-3">
								<p className="text-primary mb-1 text-xs font-medium">
									AI Summary
								</p>
								<p className="text-foreground text-sm">
									Team agreed to extend the deadline to Friday, March 21st. QA
									testing will begin Wednesday.
								</p>
							</div>
							<div className="bg-muted/60 rounded-lg p-3">
								<p className="text-muted-foreground mb-1 text-xs">
									Action Item Detected
								</p>
								<p className="text-foreground text-sm">
									→ Jordan to set up the QA environment by EOD Tuesday.
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	</section>
);

export default AIAssistant;
