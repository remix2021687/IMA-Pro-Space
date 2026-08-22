"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const B2BSectionButton: React.FC = () => {
	const t = useTranslations("B2BSectionButton");
	const containerRef = useRef<HTMLElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const { contextSafe } = useGSAP({ scope: buttonRef });

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: buttonRef.current,
					start: "top 80%",
					once: true,
				},
				defaults: {
					ease: "power3.out",
					duration: 0.6,
				},
			});

			tl.from(buttonRef.current, {
				y: -20,
				opacity: 0,
			});
		},
		{ scope: containerRef },
	);

	const hoverEffect = contextSafe((el: React.MouseEvent<HTMLButtonElement>) => {
		const button = el.currentTarget;

		gsap.to(button, {
			scale: 1.05,
			backgroundColor: "white",
			color: "black",
			ease: "power3.out",
			duration: 0.4,
		});
	});

	const resetEffect = contextSafe((el: React.MouseEvent<HTMLButtonElement>) => {
		const button = el.currentTarget;

		gsap.to(button, {
			scale: 1,
			backgroundColor: "#21026E",
			color: "white",
			ease: "power3.out",
			duration: 0.4,
		});
	});

	return (
		<section ref={containerRef}>
			<button
				ref={buttonRef}
				onMouseEnter={hoverEffect}
				onMouseLeave={resetEffect}
				className='w-fit px-12 py-3.75 rounded-full bg-[#21026E] text-[16px] text-white border-2 border-[#21026E] font-bold cursor-pointer'>
				{t("button_text")}
			</button>
		</section>
	);
};
