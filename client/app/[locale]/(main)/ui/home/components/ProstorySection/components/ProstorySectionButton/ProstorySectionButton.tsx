"use client";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const ProstorySectionButton: React.FC = () => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const { contextSafe } = useGSAP({ scope: buttonRef });

	useGSAP(
		() => {
			gsap.from(buttonRef.current, {
				scrollTrigger: {
					trigger: buttonRef.current,
					start: "top 80%",
					once: true,
				},
				y: -20,
				opacity: 0,
			});
		},
		{ scope: buttonRef },
	);

	const buttonEffect = contextSafe(() => {
		const button = buttonRef.current;
	});

	return (
		<button
			ref={buttonRef}
			className='px-12 py-3.5 rounded-full bg-[#21026E] text-[14px] text-white font-bold w-fit cursor-pointer'>
			Zobrazit všechny prostory
		</button>
	);
};
