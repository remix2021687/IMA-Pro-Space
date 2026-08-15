"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const HeroSectionButton: React.FC = () => {
	const { contextSafe } = useGSAP();
	const ButtonRef = useRef<HTMLButtonElement>(null);
	const containerRef = useRef<HTMLElement>(null);
	const duration: number = 0.3;

	useGSAP(
		() => {
			gsap.from(ButtonRef.current, {
				y: -20,
				opacity: 0,
				delay: 1,
				duration: 0.6,
				ease: "circ.out",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
			});
		},
		{ scope: containerRef },
	);

	const hoverEffect = contextSafe(
		(element: React.MouseEvent<HTMLButtonElement>) => {
			const button = element.currentTarget;

			gsap.to(button, {
				scale: 1.05,
				backgroundColor: "white",
				color: "black",
				duration: duration,
				ease: "power2.out",
			});
		},
	);

	const resetEffect = contextSafe(
		(element: React.MouseEvent<HTMLButtonElement>) => {
			const button = element.currentTarget;

			gsap.to(button, {
				scale: 1,
				backgroundColor: "#21026E",
				color: "white",
				duration: duration,
				ease: "power2.out",
			});
		},
	);

	return (
		<section ref={containerRef}>
			<button
				ref={ButtonRef}
				onMouseEnter={hoverEffect}
				onMouseLeave={resetEffect}
				className='my-5 py-4 px-12 bg-[#21026E] rounded-full text-white text-[14px] font-bold tracking-[1.68px] cursor-pointer border-2 border-[#21026E]'>
				Rezervovat prostor
			</button>
		</section>
	);
};
