"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const HeroSectionLocation: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const h3Split = new SplitText(".h3-text", { type: "chars" });
			const h1Split = new SplitText(".h1-text", { type: "chars" });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
			});

			tl.from(h3Split.chars, {
				opacity: 0,
				y: -10,
				duration: 0.3,
				stagger: 0.03,
				ease: "power2.out",
			}).from(h1Split.chars, {
				opacity: 0,
				y: -10,
				duration: 0.3,
				stagger: 0.03,
				ease: "power2.out",
			});
		},
		{ scope: containerRef },
	);

	return (
		<section ref={containerRef} className='flex flex-col gap-2'>
			<h3 className='text-[#797583] text-[10px] font-bold tracking-[1px] h3-text'>
				LOKALITA
			</h3>
			<h1 className='text-[#1C1B20] text-[16px] h1-text'>
				Českomoravská 2510/19
			</h1>
		</section>
	);
};
