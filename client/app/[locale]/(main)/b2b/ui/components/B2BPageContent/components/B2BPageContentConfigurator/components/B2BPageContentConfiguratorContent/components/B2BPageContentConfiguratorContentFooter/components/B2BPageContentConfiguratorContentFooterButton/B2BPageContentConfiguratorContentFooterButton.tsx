"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useAppDispatch } from "@lib/store/hooks";
import { setVisibleForm } from "@lib/store/slice/B2BSlice/B2BSlice";
import gsap from "gsap";

export const B2BPageContentConfiguratorContentFooterButton: React.FC = () => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const dispatch = useAppDispatch();
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

	return (
		<button
			ref={buttonRef}
			onMouseEnter={hoverEffect}
			onMouseLeave={resetEffect}
			onClick={() => {
				dispatch(setVisibleForm(true));
			}}
			className='px-12 py-3.5 bg-[#20026E] rounded-full text-[16px] text-white font-bold cursor-pointer border-2 border-[#20026E]'>
			Pokračovat
		</button>
	);
};
