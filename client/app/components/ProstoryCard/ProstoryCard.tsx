"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import img from "@public/img/DSC09905.jpg";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface IProstoryCardList {
	name: string;
}

interface IProstoryCard {
	id: string;
	photo: string;
	title: string;
	list: IProstoryCardList[];
	price: number;
}

export const ProstoryCard: React.FC<IProstoryCard> = ({
	id,
	photo,
	title,
	list,
	price,
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
					ease: "circ.out",
					duration: 0.6,
					// stagger: 0.05,
				},
			});

			tl.from(containerRef.current, {
				y: -20,
				opacity: 0,
				stagger: 0.05,
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-col overflow-hidden rounded-xl border border-[#C9C4D3]'>
			<Image
				src={photo}
				alt='img'
				width={388}
				loading='lazy'
				placeholder='blur'
			/>
			<section className='flex flex-col justify-between gap-6 p-8 bg-white border-t border-[#C9C4D3]'>
				<h2 className='text-[24px] text-[#1C1B20] font-semibold'>{title}</h2>
				<section className='flex flex-col gap-2'>
					{list.map((data, index) => (
						<section key={index + 1} className='flex flex-row gap-3'>
							<CheckIcon size={20} color='#797583' weight='bold' />,
							<span className='text-[16px] text-[#484551]'>{data.name}</span>
						</section>
					))}
				</section>
				<section className='flex flex-col gap-6'>
					<hr className='text-[#C9C4D3]' />
					<section className='flex flex-row items-start justify-between'>
						<h2 className='text-[#090030] text-[16px] font-bold'>
							{price} Kč / hod
						</h2>
						<Link href={"/"}>
							<ArrowRightIcon
								size={22}
								color='#090030'
								weight='bold'
								className='cursor-pointer'
							/>
						</Link>
					</section>
				</section>
			</section>
		</section>
	);
};
