"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const B2BPageContentConfiguratorHeader: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const t = useTranslations("B2BPageContentConfiguratorHeader");

	useGSAP(
		() => {
			if (!containerRef.current) return;

			const h1Split = SplitText.create(".h1-text", {
				type: "words, lines",
				mask: "lines",
			});

			const spanSplit = SplitText.create(".span-text", {
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
					duration: 0.6,
					stagger: 0.1,
					ease: "power3.out",
				},
			});

			const revertText = () => {
				h1Split.revert();
				spanSplit.revert();
			};

			tl.from(h1Split.words, {
				yPercent: 100,
			})
				.from(spanSplit.words, {
					yPercent: 100,
				})
				.from(".hr-line", {
					scaleX: 0,
					onComplete: revertText,
				});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-col gap-6 w-full p-12 max-sm:p-6'>
			<section className='flex flex-row justify-between items-end max-sm:flex-col max-sm:items-center max-sm:gap-2'>
				<h1 className='text-[#1C1B21] text-[32px] font-semibold max-sm:text-[22px] h1-text'>
					{t("h1_text")}
				</h1>
				<span className='text-[10px] text-[#484551] font-semibold span-text'>
					IMA PRO SPACE · B2B
				</span>
			</section>
			<hr className='text-[#C9C4D3] origin-center hr-line' />
		</section>
	);
};
