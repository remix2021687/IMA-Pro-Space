"use client";

import { useRef } from "react";
import { useAppSelector, useAppDispatch } from "@lib/store/hooks";
import { Open, Close } from "@lib/store/slice/OpenMenuSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const OpenMobileMenuButton: React.FC = () => {
	const dispatch = useAppDispatch();
	const isOpenState = useAppSelector((state) => state.OpenMenuSlice.isOpen);
	const TopLineRef = useRef<HTMLSpanElement>(null);
	const CenterLineRef = useRef<HTMLSpanElement>(null);
	const BottomLineRef = useRef<HTMLSpanElement>(null);

	const LineClass: string =
		"w-full h-0.5 origin-center bg-[#484551] rounded-xl";

	const onButtonClick = () => {
		if (isOpenState == false) {
			dispatch(Open());
		} else {
			dispatch(Close());
		}
	};

	return (
		<button
			onClick={onButtonClick}
			className='hidden max-md:flex flex-col gap-1.5 w-7.5'>
			<span ref={TopLineRef} className={`${LineClass}`}></span>
			<span ref={CenterLineRef} className={`${LineClass}`}></span>
			<span ref={BottomLineRef} className={`${LineClass}`}></span>
		</button>
	);
};
