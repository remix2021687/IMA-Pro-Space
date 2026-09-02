"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRef } from "react";
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

interface IProstoryCard {
	id: string | number;
	photo: string | StaticImageData;
	title: string;
	classname?: string;
}

interface IProstoryCardList {
	name: string;
}

export const ProstoryCard: React.FC<IProstoryCard> = ({
	id,
	photo,
	title,
	classname,
}) => {
	const t = useTranslations("HeroSectionPrice");
	const containerRef = useRef<HTMLElement>(null);
	const { contextSafe } = useGSAP();
	const locale = useLocale();

	const HoverEffect = contextSafe(
		(element: React.MouseEvent<HTMLAnchorElement>) => {
			const icon = element.currentTarget.querySelectorAll(".icon");

			gsap.to(icon, {
				x: 10,
				ease: "power3.out",
				duration: 0.5,
			});
		},
	);

	const ResetEffect = contextSafe(
		(element: React.MouseEvent<HTMLAnchorElement>) => {
			const icon = element.currentTarget.querySelectorAll(".icon");

			gsap.to(icon, {
				x: 0,
				ease: "power3.out",
				duration: 0.5,
			});
		},
	);

	return (
		<section
			ref={containerRef}
			className={`flex flex-col overflow-hidden rounded-xl border border-[#C9C4D3] h-full w-fit ${classname}`}>
			<Image src={photo} alt='img' loading='lazy' width={595} height={595} />

			<section className='flex flex-col justify-between gap-6 p-8 bg-white border-t border-[#C9C4D3]'>
				<h2 className='text-[24px] text-[#1C1B20] font-semibold title-text'>
					{title}
				</h2>
				{/* <section className='flex flex-col gap-2'>
					{list.map((data, index) => (
						<section key={index + 1} className='flex flex-row gap-3 list-text'>
							<CheckIcon size={20} color='#797583' weight='bold' />
							<span className='text-[16px] text-[#484551]'>{data.name}</span>
						</section>
					))}
				</section> */}
				<section className='flex flex-col gap-6'>
					<hr className='text-[#C9C4D3] hr-text' />
					<section className='flex flex-row items-start justify-between'>
						<h2 className='text-[#090030] text-[16px] font-bold price-text'>
							1 200 Kč / {t("price_hour")}
						</h2>
						<Link
							href={`/${locale}/room/${id}`}
							onMouseEnter={HoverEffect}
							onMouseLeave={ResetEffect}
							className='link'>
							<ArrowRightIcon
								size={22}
								color='#090030'
								weight='bold'
								className='cursor-pointer icon'
							/>
						</Link>
					</section>
				</section>
			</section>
		</section>
	);
};
