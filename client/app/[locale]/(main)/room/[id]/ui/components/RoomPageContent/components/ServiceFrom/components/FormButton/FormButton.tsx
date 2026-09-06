"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const FormButton: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
	const t = useTranslations("ServiceFrom.FormButton");
	const buttonRef = useRef<HTMLButtonElement>(null);
	const { contextSafe } = useGSAP({ scope: buttonRef });

	const hoverEffect = contextSafe(() => {
		const button = buttonRef.current;

		gsap.to(button, {
			scale: 1.05,
			backgroundColor: "white",
			color: "black",
			duration: 0.4,
			ease: "power3.out",
		});
	});

	const resetEffect = contextSafe(() => {
		const button = buttonRef.current;

		gsap.to(button, {
			scale: 1,
			backgroundColor: "#21026E",
			color: "white",
			duration: 0.4,
			ease: "power3.out",
		});
	});

	const onClickAnimation = contextSafe(() => {
		const button = buttonRef.current;

		gsap.fromTo(
			button,
			{
				scale: 0.9,
				duration: 0.3,
			},
			{
				scale: 1,
			},
		);
	});

	return (
		<button
			ref={buttonRef}
			disabled={isLoading}
			onMouseEnter={hoverEffect}
			onMouseLeave={resetEffect}
			onClick={onClickAnimation}
			className='px-8 py-4 bg-[#21026E] uppercase text-white text-[14px] rounded-lg font-bold cursor-pointer border-2 border-[#21026E]'>
			{isLoading ? t("button_text_loading") : t("button_text")}
		</button>
	);
};
