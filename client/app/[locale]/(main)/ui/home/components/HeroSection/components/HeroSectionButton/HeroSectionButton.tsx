"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const HeroSectionButton: React.FC = () => {
	const { contextSafe } = useGSAP();
	const t = useTranslations("HeroSectionButton");
	const ButtonRef = useRef<HTMLButtonElement>(null);
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
					trigger: ButtonRef.current,
					start: window.innerWidth <= 768 ? "top top" : "top 80%",
					once: true,
				},
			});
		},
		{ scope: ButtonRef },
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

	const onClick = () => {
		gsap.to(window, {
			scrollTo: {
				y: "#prostory",
				offsetY: 120,
				autoKill: true,
			},
			duration: 1.2,
			ease: "power3.out",
		});
	};

	return (
		<button
			ref={ButtonRef}
			onMouseEnter={hoverEffect}
			onMouseLeave={resetEffect}
			onClick={onClick}
			className='my-5 py-4 px-12 bg-[#21026E] rounded-full text-white text-[14px] font-bold tracking-[1.68px] cursor-pointer border-2 border-[#21026E]'>
			{t("button_text")}
		</button>
	);
};
