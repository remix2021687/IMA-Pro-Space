"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const HeroSectionInfo: React.FC = () => {
	const t = useTranslations("HeroSectionInfo");
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;

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

			const h2Split = SplitText.create(".h2-text", {
				type: "words, lines",
				mask: "lines",
				autoSplit: true,
				linesClass: "line",
			});

			const pSplit = SplitText.create(".p-text", {
				type: "words, lines",
				mask: "lines",
				autoSplit: true,
				linesClass: "line",
			});

			const revertText = () => {
				h2Split.revert();
				pSplit.revert();
			};

			tl.from(
				h2Split.words,
				{
					yPercent: 100,
					delay: 0.5,
				},
				"-=0.3",
			).from(pSplit.words, {
				yPercent: 100,

				onComplete: revertText,
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-col justify-center items-start gap-6 w-fit'>
			<h2 className='max-w-145 text-[#090030] text-[48px] font-bold leading-15 max-md:text-[38px] max-md:leading-12 h2-text'>
				{t("h2_text")}
			</h2>
			<p className='text-[#484551] text-[18px] font-medium max-w-130 p-text'>
				{t("p_text")}
			</p>
		</section>
	);
};
