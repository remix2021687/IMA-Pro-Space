"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const ProstorySectionButton: React.FC = () => {
	const buttonRef = useRef<HTMLAnchorElement>(null);
	const locale = useLocale();
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

		gsap.to(button, {
			scale: 1.05,
			backgroundColor: "white",
			color: "black",
			duration: 0.3,
			ease: "power3.out",
		});
	});

	const ResetEffect = contextSafe(() => {
		const button = buttonRef.current;

		gsap.to(button, {
			scale: 1,
			backgroundColor: "#21026E",
			color: "white",
			duration: 0.3,
			ease: "power3.out",
		});
	});

	return (
		<Link
			href={`/${locale}/room`}
			onMouseEnter={buttonEffect}
			onMouseLeave={ResetEffect}
			ref={buttonRef}
			className='px-12 py-3.5 rounded-full bg-[#21026E] border-2 border-[#21026E] text-[14px] text-white font-bold w-fit cursor-pointer'>
			Zobrazit všechny prostory
		</Link>
	);
};
