"use client";

import React, { useRef } from "react";
import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useAppDispatch, useAppSelector } from "@lib/store/hooks";
import { setReadySelected } from "@lib/store/slice/B2BSlice/B2BSlice";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface IB2BReadySelectButton {
	name: string;
	content: {
		name: string;
	}[];
	refParant: RefObject<HTMLElement | null>;
	index: number;
}

export const B2BReadySelectButton: React.FC<IB2BReadySelectButton> = ({
	name,
	content,
	refParant,
	index,
}) => {
	const containerRef = useRef<HTMLButtonElement>(null);
	const dispatch = useAppDispatch();
	const SelectedState = useAppSelector((state) => state.B2BSlice.selectedBox);
	const SuccessState = useAppSelector((state) => state.B2BSlice.Success);
	const isActive =
		SelectedState.length === content.length &&
		content.every((item) => SelectedState.includes(item.name));
	const { contextSafe } = useGSAP({
		scope: refParant,
		dependencies: [isActive],
	});
	const ContentMapped = content.map((item) => item.name);

	const resulte = ContentMapped.join(" + ");

	const onHover = contextSafe((e: React.MouseEvent<HTMLElement>) => {
		if (isActive) return;

		const list = e.currentTarget;
		const h3 = list.querySelector("h3");
		const span = list.querySelector("span");

		gsap.to(list, {
			scale: 1.05,
			backgroundColor: "#20026E",
			ease: "power3.out",
			duration: 0.3,
		});

		gsap.to(h3, {
			color: "white",
			ease: "power3.out",
			duration: 0.3,
		});

		gsap.to(span, {
			color: "white",
			ease: "power3.out",
			duration: 0.3,
		});
	});

	useGSAP(
		() => {
			if (!containerRef.current) return;

			const h3 = containerRef.current.querySelector("h3");
			const span = containerRef.current.querySelector("span");

			gsap.to(containerRef.current, {
				scale: isActive ? 1.05 : 1,
				backgroundColor: isActive ? "#20026E" : "white",
				ease: "power3.out",
				duration: 0.3,
			});

			gsap.to(h3, {
				color: isActive ? "white" : "#1C1B21",
				ease: "power3.out",
				duration: 0.3,
			});

			gsap.to(span, {
				color: isActive ? "white" : "#20026E",
				ease: "power3.out",
				duration: 0.3,
			});
		},
		{ scope: containerRef, dependencies: [isActive] },
	);

	const resetEffect = contextSafe((e: React.MouseEvent<HTMLElement>) => {
		if (isActive) return;

		const list = e.currentTarget;
		const h3 = list.querySelector("h3");
		const span = list.querySelector("span");

		gsap.to(list, {
			scale: 1,
			backgroundColor: "white",
			ease: "power3.out",
			duration: 0.3,
		});

		gsap.to(h3, {
			color: "#1C1B21",
			ease: "power3.out",
			duration: 0.3,
		});

		gsap.to(span, {
			color: "#20026E",
			ease: "power3.out",
			duration: 0.3,
		});
	});

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const mapedData = content.map((item) => item.name);

		if (isActive) return;

		gsap.to(e.currentTarget, {
			scale: 0.96,
			duration: 0.1,
			yoyo: true,
			repeat: 1,
			ease: "power3.out",
		});

		dispatch(setReadySelected(mapedData));
	};

	return (
		<button
			ref={containerRef}
			onMouseEnter={onHover}
			onMouseLeave={resetEffect}
			onClick={onClick}
			disabled={SuccessState}
			className='flex flex-row items-center justify-between px-8 py-6 w-full rounded-xl cursor-pointer border border-[#C9C4D3] max-sm:px-6 max-sm:py-4 flex-wrap max-sm:justify-center max-sm:gap-2 ready-selected'>
			<h3 className='text-[18px] text-[#1C1B21] font-medium h3-text max-sm:text-[16px]'>
				{name}
			</h3>
			<span className='text-[14px] text-[#20026E] font-bold span-text'>
				{resulte}
			</span>
		</button>
	);
};
