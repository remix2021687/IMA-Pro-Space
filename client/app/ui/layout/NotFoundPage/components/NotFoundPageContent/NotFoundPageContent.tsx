"use client";

import { useRef } from "react";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const NotFoundPageContent: React.FC<{ index: number }> = ({ index }) => {
	const containerRef = useRef<HTMLAnchorElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;
			const container = containerRef.current;
			const h1El = container.querySelector("h1");
			const h2El = container.querySelector("h2");
			const pEl = container.querySelector("p");
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: "top 80%",
					once: true,
				},
				defaults: {
					duration: 0.5,
					stagger: 0.1,
					ease: "power3.out",
				},
			});

			const h1Split = SplitText.create(h1El, {
				type: "chars, lines",
				mask: "lines",
			});
			const h2Split = SplitText.create(h2El, {
				type: "words, lines",
				mask: "lines",
			});
			const pSplit = SplitText.create(pEl, {
				type: "words, lines",
				mask: "lines",
			});

			tl.from(
				h1Split.chars,
				{
					yPercent: 100,
				},
				index * 0.3,
			)
				.from(h2Split.words, {
					yPercent: 100,
				})
				.from(pSplit.words, {
					yPercent: 100,
					stagger: 0.05,
					duration: 0.3,
				});
		},
		{ scope: containerRef },
	);

	return (
		<section ref={containerRef} className='text-center'>
			<h1 className='text-[180px] text-[#090030] font-bold'>404</h1>
			<section className='flex flex-col items-center gap-4'>
				<h2 className='text-[32px] font-semibold'>
					Tato stránka neexistuje nebo byla přesunuta.
				</h2>
				<p className='text-[16px] text-[#484551] max-w-130'>
					Zadaná adresa URL nebyla nalezena. Zkontrolujte prosím správnost
					odkazu nebo pokračujte na jednu z klíčových sekcí prostoru.
				</p>
			</section>
		</section>
	);
};
