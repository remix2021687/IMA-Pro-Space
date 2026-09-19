"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const B2BSectionInfo: React.FC = () => {
	const t = useTranslations("B2BSectionInfo");
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
					duration: 0.4,
					stagger: 0.05,
				},
			});

			const h4Split = SplitText.create(".h4-text", {
				type: "words, lines",
				mask: "lines",
			});

			const h1Split = SplitText.create(".h1-text", {
				type: "words, lines",
				mask: "lines",
			});

			const pSplit = SplitText.create(".p-text", {
				type: "words, lines",
				mask: "lines",
			});

			const revertText = () => {
				h4Split.revert();
				h1Split.revert();
				pSplit.revert();
			};

			tl.from(h4Split.words, {
				yPercent: 100,
			})
				.from(h1Split.words, {
					yPercent: 100,
				})
				.from(pSplit.words, {
					yPercent: 105,

					onComplete: revertText,
				});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-col gap-4 max-md:items-center max-md:gap-8'>
			<section className='flex flex-col gap-4 max-md:gap-6'>
				<h4 className='text-[12px] text-[#090030] font-bold h4-text max-md:text-center'>
					{t("h4_text")}
				</h4>
				<h1 className='text-[#090030] text-[48px] font-bold max-md:text-[40px] max-md:text-center leading-[1.1] h1-text'>
					{t("h1_text")}
				</h1>
			</section>
			<p className='max-w-146 text-[18px] text-[#484551] leading-[28.8px] max-md:text-[16px] max-md:leading-5 max-md:text-center p-text'>
				{t("p_text")}
			</p>
		</section>
	);
};
