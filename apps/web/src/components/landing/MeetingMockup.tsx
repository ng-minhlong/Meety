'use client';

import {
	Mic,
	Video,
	MonitorUp,
	MoreHorizontal,
	MessageSquare,
	Users,
	Bot,
} from 'lucide-react';

const participants = [
	{ name: 'Sarah Chen', initials: 'SC', color: 'bg-primary' },
	{ name: 'Alex Rivera', initials: 'AR', color: 'bg-emerald-500' },
	{ name: 'Jordan Lee', initials: 'JL', color: 'bg-amber-500' },
	{ name: 'Taylor Kim', initials: 'TK', color: 'bg-rose-500' },
];

const MeetingMockup = () => (
	<div
		className="shadow-elevated bg-card overflow-hidden rounded-xl"
		style={{ outline: '1px solid hsl(0 0% 0% / 0.1)', outlineOffset: '-1px' }}
	>
		{/* Top bar */}
		<div className="border-border bg-muted/50 flex items-center justify-between border-b px-4 py-3">
			<div className="flex items-center gap-2">
				<div className="bg-destructive/60 h-3 w-3 rounded-full" />
				<div
					className="h-3 w-3 rounded-full"
					style={{ backgroundColor: 'hsl(45 93% 47% / 0.6)' }}
				/>
				<div className="h-3 w-3 rounded-full bg-emerald-400/60" />
			</div>
			<span className="text-muted-foreground text-xs font-medium">
				Team Standup — 4 participants
			</span>
			<div className="w-16" />
		</div>

		<div className="flex flex-col lg:flex-row">
			{/* Video grid */}
			<div className="flex-1 p-4">
				<div className="grid grid-cols-2 gap-3">
					{participants.map((p) => (
						<div
							key={p.name}
							className="bg-muted relative flex aspect-video items-center justify-center rounded-lg"
						>
							<div
								className={`h-12 w-12 rounded-full ${p.color} text-primary-foreground flex items-center justify-center text-sm font-medium`}
							>
								{p.initials}
							</div>
							<span className="text-muted-foreground bg-background/80 absolute bottom-2 left-2 rounded px-2 py-0.5 text-xs backdrop-blur-sm">
								{p.name}
							</span>
						</div>
					))}
				</div>

				{/* Controls */}
				<div className="mt-4 flex items-center justify-center gap-3">
					{[Mic, Video, MonitorUp, MessageSquare, Users, MoreHorizontal].map(
						(Icon, i) => (
							<button
								key={i}
								className="bg-muted hover:bg-border text-muted-foreground hover:text-foreground rounded-lg p-2.5 transition-colors duration-200"
							>
								<Icon size={18} />
							</button>
						)
					)}
					<button className="bg-destructive text-primary-foreground ml-2 rounded-lg px-4 py-2.5 text-sm font-medium">
						Leave
					</button>
				</div>
			</div>

			{/* AI Notes sidebar */}
			<div className="border-border bg-muted/30 w-full border-t p-4 lg:w-72 lg:border-l lg:border-t-0">
				<div className="mb-4 flex items-center gap-2">
					<Bot size={16} className="text-primary" />
					<span className="text-foreground text-sm font-medium">AI Notes</span>
					<span className="text-primary bg-primary/10 ml-auto rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
						Live
					</span>
				</div>
				<div className="text-muted-foreground space-y-3 text-sm">
					<div className="bg-background shadow-card rounded-lg p-2.5">
						<p className="text-foreground mb-1 text-xs font-medium">
							Key Decision
						</p>
						<p className="text-xs leading-relaxed">
							Launch date moved to March 15th. Team agreed on phased rollout.
						</p>
					</div>
					<div className="bg-background shadow-card rounded-lg p-2.5">
						<p className="text-foreground mb-1 text-xs font-medium">
							Action Item
						</p>
						<p className="text-xs leading-relaxed">
							Sarah to prepare the staging environment by Friday.
						</p>
					</div>
					<div className="bg-background shadow-card rounded-lg p-2.5">
						<p className="text-foreground mb-1 text-xs font-medium">
							Action Item
						</p>
						<p className="text-xs leading-relaxed">
							Alex to update API docs and share with the team.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default MeetingMockup;
