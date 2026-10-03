"use client";

import { useRef } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const NotFoundPageBadge: React.FC<{ index: number }> = ({ index }) => {
	const containerRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;
			const container = containerRef.current;
			const span = container.querySelector("span");
			const h4El = container.querySelector("h4");
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
				defaults: {
					duration: 0.5,
					ease: "power3.out",
				},
			});

			const h4Split = SplitText.create(h4El, {
				type: "words, lines",
				mask: "lines",
			});

			tl.from(
				container,
				{
					y: 25,
					opacity: 0,
				},
				index * 0.3,
			)
				.from(span, {
					scale: 0,
				})
				.from(h4Split.words, {
					yPercent: 100,
					stagger: 0.05,

					onComplete: () => {
						h4Split.revert();
					},
				});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-row justify-center items-center gap-3.5 px-4 py-2 bg-[#F7F2FA] rounded-full'>
			<span className='w-1.5 h-1.5 rounded-full bg-[#21026E]'></span>
			<h4>CHYBA 404 · STRÁNKA NENALEZENA</h4>
		</section>
	);
};
