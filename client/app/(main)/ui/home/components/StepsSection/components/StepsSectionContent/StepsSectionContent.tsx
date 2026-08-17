"use client";

import { StepsBox } from "@ui/components";
import { StepsBoxData } from "../../data";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const StepsSectionContent: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current) return;

			const card = gsap.utils.toArray<HTMLElement>(".step-card");

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					pin: true,
					start: "top 50%",
					end: "+=1200",
					scrub: 1,
					pinSpacing: true,
					anticipatePin: 1,
					invalidateOnRefresh: true,
				},
			});

			card.forEach((card) => {
				const numTag = card.querySelector(".numTag");

				tl.from(card, {
					y: 30,
					opacity: 0,
					ease: "none",
				}).to(
					numTag,
					{
						backgroundColor: "#090030",
						color: "white",
						duration: 0.5,
						delay: 1,
						ease: "none",
					},
					"<",
				);
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-row justify-between items-start gap-4 relative'>
			{/* <hr className='absolute top-1/2 w-full' /> */}
			{StepsBoxData.map((data, index) => (
				<StepsBox
					key={index + 1}
					index={index + 1}
					title={data.title}
					text={data.text}
				/>
			))}
		</section>
	);
};
