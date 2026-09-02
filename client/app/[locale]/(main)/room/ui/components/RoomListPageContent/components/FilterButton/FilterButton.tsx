"use client";

import { useRef } from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface IFilterButton {
	name: string;
	activeButton: boolean;
	onClick: () => void;
}

export const FilterButton: React.FC<IFilterButton> = ({
	name,
	onClick,
	activeButton,
}) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const { contextSafe } = useGSAP({ scope: buttonRef });

	const hoverButton = contextSafe(() => {
		if (activeButton) return;

		gsap.to(buttonRef.current, {
			scale: 1.05,
			backgroundColor: "#090030",
			borderColor: "#090030",
			color: "white",
			duration: 0.3,
			ease: "power3.out",
			overwrite: "auto",
		});
	});

	const resetButton = contextSafe(() => {
		if (activeButton) return;

		gsap.to(buttonRef.current, {
			scale: 1,
			backgroundColor: "white",
			borderColor: "#C9C4D3",
			color: "#484551",
			duration: 0.3,
			ease: "power3.out",
			overwrite: "auto",
		});
	});

	useGSAP(
		() => {
			gsap.to(buttonRef.current, {
				scale: activeButton ? 1.05 : 1,
				backgroundColor: activeButton ? "#090030" : "white",
				borderColor: activeButton ? "#090030" : "#C9C4D3",
				color: activeButton ? "white" : "#484551",
				duration: 0.3,
				ease: "power3.out",
				overwrite: "auto",
			});
		},
		{ scope: buttonRef, dependencies: [activeButton] },
	);

	return (
		<button
			ref={buttonRef}
			onMouseEnter={hoverButton}
			onMouseLeave={resetButton}
			onClick={onClick}
			className='px-6 py-1.75 border border-[#C9C4D3] text-[12px] text-[#484551] font-bold rounded-full cursor-pointer'>
			{name}
		</button>
	);
};
