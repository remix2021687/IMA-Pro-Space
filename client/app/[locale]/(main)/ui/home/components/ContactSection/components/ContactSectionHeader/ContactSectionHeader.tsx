"use client";

import { useRef } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const ContactSectionHeader: React.FC = () => {
	const t = useTranslations("ContactSectionHeader");
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
				linesClass: "line",
			});

			const h2Split = SplitText.create(".h2-text", {
				type: "words, lines",
				mask: "lines",
				autoSplit: true,
				linesClass: "line",
			});

			tl.from(h4Split.words, {
				yPercent: 100,
			}).from(h2Split.words, {
				yPercent: 100,
				onComplete: () => {
					h4Split.revert();
					h2Split.revert();
				},
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-col gap-4 max-md:text-center'>
			<h4 className='text-[#090030] text-[12px] font-bold h4-text'>
				{t("h4_text")}
			</h4>
			<h2 className='text-[#090030] text-[48px] font-bold h2-text'>
				{t("h2_text")}
			</h2>
		</section>
	);
};
