import Image from "next/image";

const BOTTOM_PHOTO = "/o-mnie.jpg"; // ensure this file exists in /public

export const metadata = {
	title: "O nas | SelfSfera",
	description: "Poznaj misję SelfSfery i historię, która nas napędza.",
};

export default function AboutPage() {
	return (
		<>
			{/* Header + two-column content */}
			<section className="w-full px-4 py-12 md:py-20">
				<div className="mx-auto max-w-7xl">
					<h1 className="font-rox-reg text-foreground1 mb-10 text-4xl md:text-5xl">O NAS</h1>

					<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
						{/* Left: main text */}
						<div className="text-foreground1/90 md:text-lg">
							<p className="mb-5">Być może też to znasz: praca, która na papierze wygląda świetnie, a w środku… trochę wypala.</p>
							<p className="mb-5">Przez 10 lat byłam związana z marketingiem i branżą IT — tworzyłam, zarządzałam, dostarczałam, dopinałam. Ale coś zaczęło zgrzytać. Im bardziej udawałam, że wszystko gra, tym głośniej moje wnętrze domagało się głosu.</p>
							<p className="mb-5">Zatrzymałam się.<br/>I zaczęłam słuchać.<br/>Siebie.</p>
							<p className="mb-5">Dziś jestem certyfikowaną coachką i hipnoterapeutką. Pracuję z ludźmi, którzy — tak jak ja kiedyś — mają dość funkcjonowania na autopilocie. Pomagam im odkrywać potencjał, talenty, nowy kierunek. Czasem wystarczy iskra. Czasem głębokie zanurzenie. Ale efekt zawsze jest ten sam: pełniejsze, bardziej satysfakcjonujące życie.</p>
							<p className="mb-5">Z tej zmiany narodziła się SelfSfera — przestrzeń, która nie tylko inspiruje, ale i realnie wspiera.</p>
							<p className="mb-5">To selektywny przewodnik po wydarzeniach, warsztatach i wyjazdach rozwojowych. Takich, które mają sens. Które nie obiecują złotych gór, ale oferują konkret: narzędzia, relacje, nowe perspektywy. Czasem medytacja w lesie. Czasem krąg kobiet. Czasem coaching ze szczyptą sportu – ale zawsze w rytmie duszy, nie wyścigu. Wszystko po to, by odnaleźć siebie – po swojemu, w swoim tempie.</p>
							<p className="mb-0">Zbieramy tu wyjątkowych ludzi i wyjątkowe wydarzenia. Dzielimy się miejscami, które pachną rozpalonym kominkiem i chlebem z pieca, mają prawdziwe drzewa za oknem i przestrzeń, w której można prawdziwie odetchnąć.</p>
						</div>

						{/* Right: important info panel */}
						<aside className="md:pl-6">
							<div className="bg-secondary/60 border border-foreground2/20 p-6 md:p-7">
								<h2 className="text-foreground1 mb-4 text-sm uppercase tracking-widest">Sedno SelfSfery</h2>
								<p className="text-foreground1 mb-6">To nie wyszukiwarka, a zaproszenie – do siebie, do innych i do życia, które naprawdę Cię woła.</p>
								<ul className="text-foreground1/90 mb-6 list-disc space-y-2 pl-5">
									<li>Selektywny przewodnik: wydarzenia, warsztaty, wyjazdy</li>
									<li>Konkret zamiast obietnic: narzędzia, relacje, perspektywy</li>
									<li>W rytmie duszy, nie wyścigu</li>
								</ul>
								<div className="text-sm text-foreground2/90">
									<p className="mb-3">Jeśli organizujesz wartościowe wydarzenia lub prowadzisz wyjątkowe miejsce – porozmawiajmy.</p>
									<a
										href="/kontakt"
										className="bg-tertiary text-primary hover:bg-foreground1 inline-block px-6 py-3 font-semibold tracking-wide transition-colors"
									>
										Współpraca
									</a>
								</div>
							</div>

							<div className="border-l-4 border-tertiary mt-6 pl-5 text-foreground1">
								<p className="font-semibold tracking-wide">Nikola Zbyszewska-Strus – założycielka SelfSfery</p>
							</div>
						</aside>
					</div>
				</div>
			</section>

			{/* Bottom full-width photo */}
			<section className="w-full px-4 pb-16">
				<div className="relative mx-auto max-w-7xl overflow-hidden">
					<div className="relative aspect-[16/6] w-full md:aspect-[16/5] lg:aspect-[16/7]">
						<Image
							src={BOTTOM_PHOTO}
							alt="SelfSfera – nasza przestrzeń"
							fill
							className="object-cover"
							sizes="(max-width:768px) 100vw, 1120px"
							priority
						/>
					</div>
				</div>
			</section>
		</>
	);
}

