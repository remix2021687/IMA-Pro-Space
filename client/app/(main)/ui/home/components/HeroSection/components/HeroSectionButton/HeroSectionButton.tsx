"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const HeroSectionButton: React.FC = () => {
	const { contextSafe } = useGSAP();
	const duration: number = 0.3;

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
		<button
			onMouseEnter={hoverEffect}
			onMouseLeave={resetEffect}
			className='my-5 py-4 px-12 bg-[#21026E] rounded-full text-white text-[14px] font-bold tracking-[1.68px] cursor-pointer border-2 border-[#21026E]'>
			Rezervovat prostor
		</button>
	);
};
