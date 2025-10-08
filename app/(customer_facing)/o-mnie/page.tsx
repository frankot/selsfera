import Image from "next/image";

export const metadata = {
	title: "O nas | SelfSfera",
	description: "Poznaj misję SelfSfery i historię, która nas napędza.",
};

export default function AboutPage() {
	return (
		<section className="w-full px-4 pt-10 md:pt-14 pb-20">
			<div className="mx-auto max-w-4xl">
				<h1 className="font-rox-reg text-foreground1 mb-8 text-3xl md:text-4xl">O NAS</h1>

				{/* Float image on desktop, stacked on mobile */}
				<div>
					<Image
						src="/o-mnie-vert.jpg"
						alt="SelfSfera – o nas"
						width={640}
						height={900}
						priority
						className="mb-6 w-full max-w-[420px] h-auto md:float-right md:ml-10 md:mb-6"
						sizes="(max-width: 768px) 100vw, 420px"
					/>

					<div className="text-foreground1/90 leading-relaxed md:text-lg">
						<p>
							Być może też to znasz: praca, która na papierze wygląda świetnie, a w środku… trochę wypala.
						</p>
						<p>
							Przez 10 lat byłam związana z marketingiem i branżą IT — tworzyłam, zarządzałam, dostarczałam, dopinałam. Ale coś zaczęło
							zgrzytać. Im bardziej udawałam, że wszystko gra, tym głośniej moje wnętrze domagało się głosu.
						</p>
						<p>
							Zatrzymałam się.
							<br />I zaczęłam słuchać.
							<br />Siebie.
						</p>
						<p>
							Dziś jestem certyfikowaną coachką i hipnoterapeutką. Pracuję z ludźmi, którzy — tak jak ja kiedyś — mają dość funkcjonowania
							na autopilocie. Pomagam im odkrywać potencjał, talenty, nowy kierunek. Czasem wystarczy iskra. Czasem głębokie zanurzenie.
							Ale efekt zawsze jest ten sam: pełniejsze, bardziej satysfakcjonujące życie.
						</p>
						<p>
							Z tej zmiany narodziła się SelfSfera — przestrzeń, która nie tylko inspiruje, ale i realnie wspiera.
						</p>
						<p>
							To selektywny przewodnik po wydarzeniach, warsztatach i wyjazdach rozwojowych. Takich, które mają sens. Które nie obiecują
							złotych gór, ale oferują konkret: narzędzia, relacje, nowe perspektywy. Czasem medytacja w lesie. Czasem krąg kobiet. Czasem
							coaching ze szczyptą sportu – ale zawsze w rytmie duszy, nie wyścigu. Wszystko po to, by odnaleźć siebie – po swojemu, w swoim
							tempie.
						</p>
						<p>
							Zbieramy tu wyjątkowych ludzi i wyjątkowe wydarzenia. Dzielimy się miejscami, które pachną rozpalonym kominkiem i chlebem z
							pieca, mają prawdziwe drzewa za oknem i przestrzeń, w której można prawdziwie odetchnąć.
						</p>
						<p>
							To nie wyszukiwarka, a zaproszenie - do siebie, do innych i do życia, które naprawdę Cię woła.
						</p>
						<p>
							Jeśli jesteś organizatorem warsztatów, prowadzącą, przewodnikiem, właścicielem wyjątkowego miejsca – zapraszamy Cię do
							współtworzenia tej przestrzeni. SelfSfera powstała właśnie po to, by łączyć – ludzi, pomysły, przestrzenie. Z wyczuciem,
							sercem, ale przede wszystkim misją.
						</p>
						<p className="font-rox-reg text-foreground1 mt-8 text-xl">
							Nikola Zbyszewska-Strus — założycielka SelfSfery
						</p>
					</div>

					{/* Clear the float after text */}
					<div className="clear-both" />
				</div>
			</div>
		</section>
	);
}

