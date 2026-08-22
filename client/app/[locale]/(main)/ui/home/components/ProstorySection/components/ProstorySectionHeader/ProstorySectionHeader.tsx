"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const ProstorySectionHeader: React.FC = () => {
	const t = useTranslations("ProstorySectionHeader");
	const containerRef = useRef<HTMLElement>(null);

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

			const h4Split = SplitText.create(".h4-text", {
				type: "words, lines",
				mask: "lines",
				autoSplit: true,
				linesClass: "line",
			});

			const h1Split = SplitText.create(".h1-text", {
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
				h4Split.revert();
				h1Split.revert();
				pSplit.revert();
			};

			tl.from(h4Split.words, {
				yPercent: 100,
			})
				.from(
					h1Split.words,
					{
						yPercent: 100,
					},
					"-=0.4",
				)
				.from(pSplit.words, {
					yPercent: 100,

					onComplete: revertText,
				});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-row justify-between max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center max-md:gap-4'>
			<section className='flex flex-col gap-3.5 max-md:gap-1'>
				<h4 className='text-[12px] text-[#090030] font-bold h4-text'>
					{t("h4_text")}
				</h4>
				<h1 className='text-[#1C1B20] text-[32px] font-semibold h1-text'>
					{t("h1_text")}
				</h1>
			</section>
			<p className='max-w-[384px] text-[16px] text-[#484551] text-right max-md:text-[14px] max-md:text-center p-text'>
				{t("p_text")}
			</p>
		</section>
	);
};
