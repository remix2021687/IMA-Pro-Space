"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const HeroSectionLocation: React.FC = () => {
	const t = useTranslations("HeroSectionLocation");
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
					duration: 0.8,
					stagger: 0.05,
					ease: "power3.out",
				},
			});

			const h3Split = SplitText.create(".h3-text", {
				type: "chars, lines",
				mask: "lines",
			});

			const h1Split = SplitText.create(".h1-text", {
				type: "chars, lines",
				mask: "lines",
				autoSplit: true,
				linesClass: "line",
			});

			const revertText = () => {
				h3Split.revert();
				h1Split.revert();
			};

			tl.from(h3Split.chars, {
				yPercent: 100,
			}).from(h1Split.chars, {
				yPercent: 100,

				onComplete: revertText,
			});
		},
		{ scope: containerRef },
	);

	return (
		<section ref={containerRef} className='flex flex-col gap-2'>
			<h3 className='text-[#797583] text-[10px] font-bold tracking-[1px] h3-text uppercase'>
				{t("location")}
			</h3>
			<h1 className='text-[#1C1B20] text-[16px] h1-text'>
				Českomoravská 2510/19
			</h1>
		</section>
	);
};
