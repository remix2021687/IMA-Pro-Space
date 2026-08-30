"use client";

import { useRef } from "react";
import { MapPinIcon, MoneyIcon } from "@phosphor-icons/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const RoomPageHeaderInfo: React.FC<{
	name: string;
	description: string;
}> = ({ name, description }) => {
	const containerRef = useRef<HTMLElement>(null);
	const list: Array<{ icon: React.ReactElement; name: string }> = [
		{
			icon: (
				<MapPinIcon className='icon' size={20} color='#797583' weight='bold' />
			),
			name: "Křižíkova 2136/2A, 186 00 Karlín",
		},
		{
			icon: (
				<MoneyIcon className='icon' size={20} color='#797583' weight='bold' />
			),
			name: "1 200 Kč/hod",
		},
	];

	useGSAP(
		() => {
			if (!name && !description) return;
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
				defaults: {
					ease: "power3.out",
					duration: 0.4,
				},
			});

			const h2Split = SplitText.create(".h2-text", {
				type: "chars, lines",
				mask: "chars",
			});

			const spanSplit = SplitText.create(".span-text", {
				type: "words, lines",
				mask: "words",
			});

			const pSPlit = SplitText.create(".p-text", {
				type: "words, lines",
				mask: "words",
			});

			const revertText = () => {
				h2Split.revert();
				spanSplit.revert();
				pSPlit.revert();
			};

			tl.from(h2Split.chars, {
				yPercent: 100,
				stagger: 0.03,
			})
				.from(
					".icon",
					{
						x: -10,
						stagger: 0.1,
						opacity: 0,
					},
					"-=0.2",
				)
				.from(
					spanSplit.words,
					{
						yPercent: 100,
						stagger: 0.08,
					},
					"-=0.3",
				)
				.from(
					".hr",
					{
						scaleX: 0,
						duration: 0.8,
					},
					"-=0.3",
				)
				.from(pSPlit.words, {
					yPercent: 100,
					stagger: 0.05,
					onComplete: revertText,
				});
		},
		{ scope: containerRef, dependencies: [name, description] },
	);

	return (
		<section ref={containerRef} className='flex flex-col gap-6 w-[50%]'>
			<h2 className='text-[48px] text-[#090030] font-bold h2-text'>{name}</h2>
			<section className='flex flex-col gap-2'>
				{list.map((data, index) => (
					<section className='flex flex-row items-center gap-2' key={index + 1}>
						{data.icon}
						<span className='flex flex-row items-center gap-2 text-[18px] text-[#484551] font-medium span-text'>
							{data.name}
						</span>
					</section>
				))}
			</section>
			<hr className='text-[#C9C4D3] w-md hr origin-left' />
			<p className='text-[#484551] text-[18px] leading-6.5 max-w-md p-text'>
				{description}
			</p>
		</section>
	);
};
