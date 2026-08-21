"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const StepsSectionHeader: React.FC = () => {
	const t = useTranslations("StepsSectionHeader");
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

			const h4Split = SplitText.create(".h4-text", {
				type: "words, lines",
				mask: "lines",
				autoSplit: true,
				linesClass: "lien",
			});

			const h2Split = SplitText.create(".h2-text", {
				type: "words, lines",
				mask: "lines",
				autoSplit: true,
				linesClass: "lien",
			});

			const revertText = () => {
				h4Split.revert();
				h2Split.revert();
			};

			tl.from(
				h4Split.words,
				{
					yPercent: 105,
				},
				"<+=0.3",
			).from(h2Split.words, {
				yPercent: 100,

				onComplete: revertText,
			});
		},
		{ scope: containerRef },
	);

	return (
		<section ref={containerRef} className='flex flex-col items-center gap-10'>
			<section className='flex flex-col gap-4 text-center'>
				<h4 className='text-[14px] text-[#090030] font-bold h4-text max-md:text-[12px]'>
					{t("h4_text")}
				</h4>
				<h2 className='text-[32px] text-[#1C1B20] font-semibold h2-text max-md:text-[25px]'>
					{t("h2_text")}
				</h2>
			</section>
		</section>
	);
};
