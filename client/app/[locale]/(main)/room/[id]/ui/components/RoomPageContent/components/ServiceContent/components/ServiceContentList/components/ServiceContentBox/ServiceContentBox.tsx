"use client";

import { RefObject, useRef } from "react";
import { CheckIcon } from "@phosphor-icons/react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const ServiceContentBox: React.FC<{
	name: string;
	parentRef: RefObject<HTMLElement | null>;
}> = ({ name, parentRef }) => {
	const containerRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			gsap.from(containerRef.current, {
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					scroller: parentRef.current,
					toggleActions: "play reverse play reverse",
				},
				scale: 0,
				opacity: 0,
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-row items-center gap-6 p-4 w-full bg-white border border-[#C9C4D3] rounded-lg origin-center'>
			<section className='flex flex-col justify-center items-center rounded-full w-10 h-10 bg-[#F1ECF4] border border-[#C9C4D3]'>
				<CheckIcon size={20} color='#605980' weight='bold' />
			</section>
			<h2 className='text-[#1C1B20] text-[18px] font-medium'>{name}</h2>
		</section>
	);
};
