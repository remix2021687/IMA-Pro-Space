"use client";

import { useRef } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const ServiceContentHeader: React.FC<{ title: string }> = ({
	title,
}) => {
	const containerRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
				defaults: {
					direction: 0.4,
					ease: "power3.out",
				},
			});

			const h2Split = SplitText.create(".h2-text", {
				type: "words, lines",
				mask: "words",
			});

			tl.from(h2Split.words, {
				yPercent: 100,
				stagger: 0.05,
			}).from(".hr", {
				scaleX: 0,
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-col gap-4 max-sm:items-center'>
			<h2 className='text-[24px] text-[#090030] font-semibold h2-text'>
				{title}
			</h2>
			<hr className='text-[#C9C4D3] origin-left hr w-full' />
		</section>
	);
};
