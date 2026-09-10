"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useAppSelector } from "@lib/store/hooks";
import { useCreateB2BRequestMutation } from "@lib/store/api/APIs/B2BAPI";
import gsap from "gsap";

export const B2BPageContentConfiguratorContentFooterButton: React.FC = () => {
	const SelectedState = useAppSelector((state) => state.B2BSlice.selectedBox);
	const FormSendState = useAppSelector((state) => state.B2BSlice.formSend);
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

	const onClick = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.currentTarget;

		gsap.to(button, {
			scale: 0.96,
			duration: 0.1,
			ease: "power3.out",
			yoyo: true,
			repeat: 1,
		});
	});

	return (
		<button
			ref={buttonRef}
			onMouseEnter={hoverEffect}
			onMouseLeave={resetEffect}
			onClick={onClick}
			className='px-12 py-3.5 bg-[#20026E] rounded-full text-[16px] text-white font-bold cursor-pointer border-2 border-[#20026E]'>
			Odeslat poptávku
		</button>
	);
};
