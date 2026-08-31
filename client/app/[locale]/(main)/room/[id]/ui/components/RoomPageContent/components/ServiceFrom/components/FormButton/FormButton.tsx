"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const FormButton: React.FC = () => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const { contextSafe } = useGSAP({ scope: buttonRef });

	const hoverEffect = () => {
		const button = buttonRef.current;

		gsap.to(button, {
			scale: 1.05,
			backgroundColor: "white",
			color: "black",
			duration: 0.4,
			ease: "power3.out",
		});
	};

	const resetEffect = () => {
		const button = buttonRef.current;

		gsap.to(button, {
			scale: 1,
			backgroundColor: "#21026E",
			color: "white",
			duration: 0.4,
			ease: "power3.out",
		});
	};

	return (
		<button
			ref={buttonRef}
			onMouseEnter={hoverEffect}
			onMouseLeave={resetEffect}
			className='px-8 py-4 bg-[#21026E] text-white text-[14px] rounded-lg font-bold cursor-pointer border-2 border-[#21026E]'>
			REZERVOVAT
		</button>
	);
};
