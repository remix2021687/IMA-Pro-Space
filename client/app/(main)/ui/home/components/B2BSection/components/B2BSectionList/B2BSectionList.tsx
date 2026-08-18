"use client";

import { useRef } from "react";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

export const B2BSectionList: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const ListData: Array<{ name: string }> = [
		{ name: "Sál + Přenos: Pro prezentace značky" },
		{ name: "Sál + Kabinety: Pro školení distributorů" },
		{ name: "Sál + Terasa: Pro launch produktu" },
	];

	useGSAP(
		() => {
			const listEL = gsap.utils.toArray<HTMLElement>(".list");
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
				defaults: {
					ease: "power3.out",
					duration: 0.6,
				},
			});

			listEL.forEach((ls) => {
				const h4Text = ls.querySelector(".h4-text");
				const icon = ls.querySelector(".icon");

				const h4SplitParant = new SplitText(h4Text, {
					type: "words",
					wordsClass: "inline-block overflow-hidden",
				});

				const h4SplitChild = new SplitText(h4SplitParant.words, {
					type: "words",
					wordsClass: "inline-block overflow-hidden",
				});
				tl.from(
					icon,
					{
						x: -15,
						opacity: 0,
						stagger: 0.5,
					},
					"<+=0.6",
				).from(h4SplitChild.words, {
					yPercent: 100,
					stagger: 0.05,
				});
			});
		},
		{ scope: containerRef },
	);

	return (
		<section ref={containerRef} className='flex flex-col gap-4'>
			{ListData.map((data, index) => (
				<section
					key={index + 1}
					className='flex flex-row items-center gap-2 list'>
					<CheckCircleIcon
						size={20}
						weight='bold'
						color='#090030'
						className='icon'
					/>
					<h4 className='text-[#484551] text-[16px] h4-text max-md:text-[14px]'>
						{data.name}
					</h4>
				</section>
			))}
		</section>
	);
};
