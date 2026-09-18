"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

import { useTranslations } from "next-intl";

export const B2BPageHeader: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const t = useTranslations("B2BPageHeader");

	useGSAP(
		() => {
			if (!containerRef.current) return;

			const h4Split = SplitText.create(".h4-text", {
				type: "words, lines",
				mask: "lines",
			});

			const h2Split = SplitText.create(".h2-text", {
				type: "chars, lines",
				mask: "lines",
			});

			const pSplit = SplitText.create(".p-text", {
				type: "words, lines",
				mask: "lines",
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
				defaults: {
					stagger: 0.05,
					duration: 0.4,
					ease: "power3.out",
				},
			});

			const revertText = () => {
				h4Split.revert();
				h2Split.revert();
				pSplit.revert();
			};

			tl.from(h4Split.words, {
				yPercent: 100,
			})
				.from(
					h2Split.chars,
					{
						yPercent: 100,
						duration: 0.2,
						stagger: 0.03,
					},
					"<+=0.2",
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
			className='flex flex-row justify-between items-end w-full max-md:flex-col max-md:items-start max-sm:text-center max-sm:items-center'>
			<section className='flex flex-col gap-4'>
				<h4 className='text-[12px] text-[#090030] font-bold max-sm:text-[10px] h4-text'>
					{t("h4_text")}
				</h4>
				<h2 className='text-[48px] text-[#090030] font-bold max-sm:text-[30px] h2-text'>
					{t("h2_text")}
				</h2>
			</section>
			<p className='max-w-md text-[18px] text-[#484551] text-right font-medium max-sm:text-[14px] p-text'>
				{t("p_text")}
			</p>
		</section>
	);
};
