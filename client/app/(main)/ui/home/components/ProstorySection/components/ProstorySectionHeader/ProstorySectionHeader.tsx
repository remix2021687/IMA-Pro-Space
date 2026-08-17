"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const ProstorySectionHeader: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			const TextElement =
				containerRef.current.querySelectorAll<HTMLElement>("h4, h1, p");

			const ParentSplit = new SplitText(TextElement, {
				type: "words",
				wordsClass: "inline-block  overflow-hidden",
			});

			const ChildSplit = new SplitText(ParentSplit.words, {
				type: "words",
				wordsClass: "inline-block",
			});

			gsap.from(ChildSplit.words, {
				yPercent: 100,
				duration: 0.6,
				ease: "circ.out",
				stagger: 0.05,
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-row justify-between max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center max-md:gap-4'>
			<section className='flex flex-col gap-3.5 max-md:gap-1'>
				<h4 className='text-[12px] text-[#090030] font-bold'>
					PROSTORY K PRONÁJMU
				</h4>
				<h1 className='text-[#1C1B20] text-[32px] font-semibold '>
					Kabinety & Prostory
				</h1>
			</section>
			<p className='max-w-[384px] text-[16px] text-[#484551] text-right max-md:text-[14px] max-md:text-center'>
				Standardizované prostory plně vybavené pro estetickou péči a školení.
			</p>
		</section>
	);
};
