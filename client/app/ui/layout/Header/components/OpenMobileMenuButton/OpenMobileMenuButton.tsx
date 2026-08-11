"use client";

import { useRef } from "react";
import { useAppSelector, useAppDispatch } from "@lib/store/hooks";
import {
	Open,
	Close,
	ChangeModelDispled,
} from "@lib/store/slice/OpenMenuSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const OpenMobileMenuButton: React.FC = () => {
	const dispatch = useAppDispatch();
	const buttonRef = useRef<HTMLButtonElement>(null);
	const tl = useRef<GSAPTimeline>(null);
	const isModelDispledState = useAppSelector(
		(state) => state.OpenMenuSlice.isModelDispled,
	);
	const isOpenState = useAppSelector((state) => state.OpenMenuSlice.isOpen);

	const LineClass: string =
		"w-full h-0.5 origin-center bg-[#484551] rounded-xl";

	useGSAP(
		() => {
			tl.current = gsap
				.timeline({
					paused: true,
					defaults: { duration: 0.3, ease: "power2.inOut" },
				})
				.to(".center-line", {
					scaleX: 0,
					opacity: 0,
					duration: 0.2,
				})
				.to(
					".top-line",
					{
						y: 8,
					},
					0,
				)
				.to(
					".bottm-line",
					{
						y: -8,
					},
					0,
				)
				.to(".top-line", { rotation: 45 }, 0.1)
				.to(".bottm-line", { rotation: -45 }, 0.1);
		},
		{ scope: buttonRef },
	);

	useGSAP(() => {
		if (isOpenState) {
			tl.current?.play();
		} else {
			tl.current?.reverse();
		}
	}, [isOpenState]);

	const onButtonClick = () => {
		if (isOpenState == false) {
			dispatch(Open());
		} else {
			dispatch(Close());
		}
	};

	return (
		<button
			ref={buttonRef}
			onClick={onButtonClick}
			className='hidden max-md:flex flex-col justify-center items-center gap-1.5 w-7.5 h-7.5 cursor-pointer origin-center relative z-10'>
			<span className={`${LineClass} top-line`}></span>
			<span className={`${LineClass} center-line`}></span>
			<span className={`${LineClass} bottm-line`}></span>
		</button>
	);
};
