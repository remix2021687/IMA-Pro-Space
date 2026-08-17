"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { CaretDownIcon } from "@phosphor-icons/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const StepsSectionHeader: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
				defaults: {
					ease: "power3.out",
					duration: 0.6,
					stagger: 0.05,
				},
			});

			const h4SplitParant = new SplitText(".h4-text", {
				type: "words",
				wordsClass: "inline-block overflow-hidden",
			});

			const h4SplitChild = new SplitText(h4SplitParant.words, {
				type: "words",
				wordsClass: "overflow-hidden",
			});

			const h2SplitParant = new SplitText(".h2-text", {
				type: "words",
				wordsClass: "inline-block overflow-hidden",
			});

			const h2SplitChild = new SplitText(h2SplitParant.words, {
				type: "words",
				wordsClass: "overflow-hidden",
			});

			tl.from(
				h4SplitChild.words,
				{
					yPercent: 100,
				},
				"<+=0.3",
			).from(h2SplitChild.words, {
				yPercent: 100,
			});
		},
		{ scope: containerRef },
	);

	return (
		<section ref={containerRef} className='flex flex-col items-center gap-10'>
			<section className='flex flex-col gap-4 text-center'>
				<h4 className='text-[14px] text-[#090030] font-bold h4-text'>
					CESTA SPECIALISTY
				</h4>
				<h2 className='text-[32px] text-[#1C1B20] font-semibold h2-text'>
					Jak to funguje
				</h2>
			</section>
		</section>
	);
};
