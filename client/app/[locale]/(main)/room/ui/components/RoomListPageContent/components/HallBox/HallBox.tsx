"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
	UsersThreeIcon,
	MonitorIcon,
	ArrowRightIcon,
} from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import img from "@public/img/bg_img.png";

gsap.registerPlugin(SplitText, ScrollTrigger);

type ListType = {
	name: string;
	icon: React.ReactNode;
};

export const HallBox: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const [isEntry, setIsEntry] = useState(false);

	const ListData: ListType[] = [
		{
			name: "50 osob",
			icon: <UsersThreeIcon size={18} color='#484551' className='icon' />,
		},
		{
			name: "4K Projekce",
			icon: <MonitorIcon size={18} color='#484551' className='icon' />,
		},
	];

	useGSAP(
		() => {
			gsap.to(".arrow-icon", {
				x: isEntry ? 8 : 0,
				ease: "power3.out",
				duration: 0.3,
			});
		},
		{ scope: containerRef, dependencies: [isEntry] },
	);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top center",
					once: true,
				},
				defaults: {
					ease: "power3.out",
					duration: 0.4,
				},
			});

			const h2Split = SplitText.create(".h2-text", {
				type: "chars, lines",
				mask: "lines",
			});

			const h4Split = SplitText.create(".list .h4-text", {
				type: "chars, lines",
				mask: "lines",
			});

			const h2ReqSplit = SplitText.create(".h2-req-text", {
				type: "words, lines",
				mask: "lines",
			});

			const revertText = () => {
				h2Split.revert();
				h4Split.revert();
				h2ReqSplit.revert();
			};

			tl.from(containerRef.current, {
				y: -20,
				opacity: 0,
			})
				.from(h2Split.chars, {
					yPercent: 100,
					stagger: 0.05,
				})
				.from(".list .icon", {
					opacity: 0,
					y: 15,
					stagger: 0.08,
				})
				.from(h4Split.chars, {
					yPercent: 100,
					stagger: 0.05,
				})
				.from(".hr", {
					scaleX: 0,
				})
				.from(h2ReqSplit.words, {
					yPercent: 100,
					stagger: 0.05,
				})
				.from(".arrow-icon", {
					x: -30,
					opacity: 0,
					onComplete: revertText,
				});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			onMouseEnter={() => setIsEntry(true)}
			onMouseLeave={() => setIsEntry(false)}
			className='flex flex-col overflow-hidden rounded-2xl cursor-pointer'>
			<Image src={img} alt='hall' />

			<section className='flex flex-col gap-4 p-6 border border-[#C9C4D3] rounded-b-2xl'>
				<h2 className='text-[24px] text-[#090030] font-semibold h2-text'>
					Sál
				</h2>
				<section className='flex flex-row gap-6'>
					{ListData.map((data, index) => (
						<section
							key={index + 1}
							className='flex flex-row justify-center items-center gap-2 list'>
							{data.icon}
							<h4 className='text-[#484551] text-[16px] h4-text'>
								{data.name}
							</h4>
						</section>
					))}
				</section>
				<hr className='text-[#C9C4D3] hr origin-center' />
				<section className='flex flex-row items-center justify-between w-full'>
					<h2 className='text-[#090030] text-[18px] h2-req-text'>
						Na vyžádání
					</h2>
					<ArrowRightIcon
						size={18}
						color='#090030'
						weight='bold'
						className='arrow-icon'
					/>
				</section>
			</section>
		</section>
	);
};
