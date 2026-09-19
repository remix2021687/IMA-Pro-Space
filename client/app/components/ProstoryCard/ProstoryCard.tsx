"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { RefObject, useRef } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface IProstoryCard {
	id: string | number;
	index: number;
	photo: string | StaticImageData;
	title: string;
	classname?: string;
}

export const ProstoryCard: React.FC<IProstoryCard> = ({
	id,
	index,
	photo,
	title,
	classname,
}) => {
	const router = useRouter();
	const t = useTranslations("HeroSectionPrice");
	const containerRef = useRef<HTMLElement>(null);
	const { contextSafe } = useGSAP({ scope: containerRef });
	const locale = useLocale();

	useGSAP(
		() => {
			if (!containerRef.current) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
				defaults: {
					ease: "power3.out",
					duration: 0.5,
				},
			});

			const titleSplit = SplitText.create(".title-text", {
				type: "words, lines",
				mask: "lines",
			});

			const priceSplit = SplitText.create(".price-text", {
				type: "words, lines",
				mask: "lines",
			});

			const revertText = () => {
				titleSplit.revert();
				priceSplit.revert();
			};

			tl.from(
				containerRef.current,
				{
					opacity: 0,
					y: -20,
				},
				index * 0.4,
			)
				.from(
					titleSplit.words,
					{
						yPercent: 100,
						stagger: 0.05,
					},
					"<+=0.5",
				)
				.from(
					priceSplit.words,
					{
						yPercent: 100,
						stagger: 0.05,
					},
					"<+=0.5",
				)
				.from(
					".hr-text",
					{
						scaleX: 0,
					},
					"<+=0.5",
				)
				.from(".icon", {
					x: -20,
					opacity: 0,
					onComplete: revertText,
				});

			ScrollTrigger.refresh();
		},
		{ scope: containerRef, dependencies: [index] },
	);

	const HoverEffect = contextSafe(() => {
		gsap.to(".icon", {
			x: 10,
			ease: "power3.out",
			duration: 0.5,
		});
	});

	const ResetEffect = contextSafe(() => {
		gsap.to(".icon", {
			x: 0,
			ease: "power3.out",
			duration: 0.5,
		});
	});

	return (
		<section
			ref={containerRef}
			onMouseEnter={HoverEffect}
			onMouseLeave={ResetEffect}
			onClick={() => {
				router.push(`/${locale}/room/${id}`);
			}}
			className={`flex flex-col overflow-hidden rounded-xl border border-[#C9C4D3] h-full w-fit ${classname} cursor-pointer`}>
			<Image src={photo} alt='img' loading='eager' width={595} height={595} />

			<section className='flex flex-col justify-between gap-6 p-8 bg-white border-t border-[#C9C4D3]'>
				<h2 className='text-[24px] text-[#1C1B20] font-semibold title-text flex flex-row gap-2'>
					{title}
				</h2>

				<section className='flex flex-col gap-6'>
					<hr className='text-[#C9C4D3] hr-text' />
					<section className='flex flex-row items-start justify-between'>
						<h2 className='text-[#090030] text-[16px] font-bold price-text'>
							1 200 Kč / {t("price_hour")}
						</h2>
						<Link href={`/${locale}/room/${id}`} className='link'>
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
