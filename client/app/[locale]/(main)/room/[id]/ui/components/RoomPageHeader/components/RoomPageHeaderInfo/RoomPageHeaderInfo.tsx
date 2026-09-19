"use client";

import { useRef } from "react";
import { MapPinIcon, MoneyIcon } from "@phosphor-icons/react";
import { ScrollTrigger, SplitText, ScrollToPlugin } from "gsap/all";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

export const RoomPageHeaderInfo: React.FC<{
	name: string;
	description: string;
}> = ({ name, description }) => {
	const t = useTranslations("HeroSectionPrice");
	const containerRef = useRef<HTMLElement>(null);
	const { contextSafe } = useGSAP();

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
			name: `1 200 Kč/${t("price_hour")}`,
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
					stagger: 0.03,
					duration: 0.3,
					onComplete: revertText,
				});
		},
		{ scope: containerRef, dependencies: [name, description] },
	);

	const scrollToButton = contextSafe(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			const button = e.currentTarget;

			gsap.to(window, {
				duration: 1.5,
				scrollTo: {
					y: "#ServiceForm",
					offsetY: 100,
					autoKill: true,
				},
				ease: "power3.out",
			});

			gsap.to(button, {
				scale: 0.96,
				duration: 0.1,
				yoyo: true,
				repeat: 1,
				ease: "power3.out",
			});
		},
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-col gap-6 w-[50%] max-md:w-full max-md:text-center max-md:items-center'>
			<h2 className='text-[48px] text-[#090030] font-bold h2-text'>{name}</h2>
			<section className='flex flex-col gap-2 max-md:items-center'>
				{list.map((data, index) => (
					<section className='flex flex-row items-center gap-2' key={index + 1}>
						{data.icon}
						<span className='flex flex-row items-center gap-2 text-[18px] text-[#484551] font-medium span-text'>
							{data.name}
						</span>
					</section>
				))}
			</section>
			<hr className='text-[#C9C4D3] max-w-md hr origin-left max-md:w-full' />
			<p className='text-[#484551] text-[18px] leading-6.5 max-w-md p-text max-md:text-[16px]'>
				{description}
			</p>
			<button
				onClick={scrollToButton}
				className='hidden px-6 py-3.5 text-white text-[14px] rounded-full bg-[#21026E] font-bold cursor-pointer max-sm:w-full max-md:flex items-center justify-center'>
				Rezervovat
			</button>
		</section>
	);
};
