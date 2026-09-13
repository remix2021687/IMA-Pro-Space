"use client";

import { toast } from "react-toastify";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useAppSelector, useAppDispatch } from "@lib/store/hooks";

import gsap from "gsap";

export const B2BPageContentConfiguratorContentFooterButton: React.FC = () => {
	const LoadingState = useAppSelector((state) => state.B2BSlice.Loading);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const { contextSafe } = useGSAP({ scope: buttonRef });

	const hoverEffect = contextSafe(() => {
		gsap.to(buttonRef.current, {
			scale: 1.05,
			backgroundColor: "white",
			color: "black",
			duration: 0.3,
			ease: "power3.out",
		});
	});

	const resetEffect = contextSafe(() => {
		gsap.to(buttonRef.current, {
			scale: 1,
			backgroundColor: "#20026E",
			color: "white",
			duration: 0.3,
			ease: "power3.out",
		});
	});

	const onClick = contextSafe(
		async (e: React.MouseEvent<HTMLButtonElement>) => {
			const button = e.currentTarget;

			gsap.to(button, {
				scale: 0.96,
				duration: 0.1,
				ease: "power3.out",
				yoyo: true,
				repeat: 1,
			});
		},
	);

	return (
		<button
			ref={buttonRef}
			form='b2b-form'
			type='submit'
			onMouseEnter={hoverEffect}
			onMouseLeave={resetEffect}
			onClick={onClick}
			className='px-12 py-3.5 bg-[#20026E] rounded-full text-[16px] text-white font-bold cursor-pointer border-2 border-[#20026E]'>
			{LoadingState ? "Načitaní..." : "Odeslat poptávku"}
		</button>
	);
};
