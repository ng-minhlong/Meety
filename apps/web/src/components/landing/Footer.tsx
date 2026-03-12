const columns = [
	{ title: 'Product', links: ['Features', 'Pricing', 'Docs', 'Changelog'] },
	{ title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
	{ title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
];

const Footer = () => (
	<footer className="border-border border-t py-16">
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
				<div>
					<span className="text-foreground text-lg font-semibold tracking-tight">
						MeetAI
					</span>
					<p className="text-muted-foreground mt-3 text-sm leading-relaxed">
						Smarter meetings, powered by AI.
					</p>
					<div className="mt-4 flex gap-3">
						{['X', 'LI', 'GH'].map((s) => (
							<a
								key={s}
								href="#"
								className="bg-muted text-muted-foreground hover:text-foreground hover:bg-border flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold transition-colors duration-200"
							>
								{s}
							</a>
						))}
					</div>
				</div>
				{columns.map((col) => (
					<div key={col.title}>
						<h4 className="text-foreground mb-4 text-sm font-semibold">
							{col.title}
						</h4>
						<ul className="space-y-2.5">
							{col.links.map((link) => (
								<li key={link}>
									<a
										href="#"
										className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="border-border mt-12 border-t pt-8 text-center">
				<p className="text-muted-foreground text-xs">
					© 2026 MeetAI. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
