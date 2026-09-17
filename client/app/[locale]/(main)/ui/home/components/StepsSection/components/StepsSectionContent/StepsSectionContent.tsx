"use client";

import { StepsBox } from "@ui/components";
import { useStateBoxData } from "../../data";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText, ScrollSmoother } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

export const StepsSectionContent: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const steps = useStateBoxData();

	useGSAP(
		() => {
			if (!containerRef.current) return;

			const viewPortGSAP = gsap.matchMedia();

			viewPortGSAP.add("(min-width: 768px)", () => {
				const card = gsap.utils.toArray<HTMLElement>(".step-card");

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: containerRef.current,
						pin: true,
						start: "top center",
						end: "+=1200",
						scrub: 1.5,
						pinSpacing: true,
						anticipatePin: 1,
						refreshPriority: 1,
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
			});

			viewPortGSAP.add("(max-width: 768px)", () => {
				const card = gsap.utils.toArray<HTMLElement>(".step-card");

				card.forEach((card) => {
					const tl = gsap.timeline({
						scrollTrigger: {
							trigger: card,
							start: "top 80%",
							once: true,
						},
						defaults: {
							duration: 1,
							ease: "power3.out",
							stagger: 0.05,
						},
					});

					tl.from(card, {
						y: 30,
						opacity: 0,
					});
				});
			});

			return () => {
				ScrollTrigger.refresh();
			};
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-row justify-between items-start gap-4 relative max-md:flex-col'>
			{steps.map((data, index) => (
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
