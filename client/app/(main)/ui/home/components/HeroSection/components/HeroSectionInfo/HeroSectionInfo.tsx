"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const HeroSectionInfo: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			const TextElement =
				containerRef.current.querySelectorAll<HTMLElement>("h2, p");

			const ParantSplit = new SplitText(TextElement, {
				type: "words",
				wordsClass: "inline-block overflow-hidden ",
			});

			const childSplit = new SplitText(ParantSplit.words, {
				type: "words",
				wordsClass: "inline-block",
			});

			gsap.from(childSplit.words, {
				yPercent: 100,
				duration: 0.6,
				ease: "power4.out",
				stagger: 0.05,
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
			});

			return () => {
				childSplit.revert();
				ParantSplit.revert();
			};
		},
		{ scope: containerRef },
	);

	return (
		<section ref={containerRef} className='flex flex-col gap-6'>
			<h2 className='text-[#090030] text-[48px] font-bold max-w-167 leading-15 max-md:text-[38px] max-md:leading-12 h2-text'>
				Profesionální prostor pro specialisty krásy v Praze
			</h2>
			<p className='text-[#484551] text-[18px] font-medium max-w-130'>
				Infrastruktura navržená pro práci, školení a prezentace. Žádné
				kompromisy v hygieně, vybavení nebo klientském komfortu.
			</p>
		</section>
	);
};
