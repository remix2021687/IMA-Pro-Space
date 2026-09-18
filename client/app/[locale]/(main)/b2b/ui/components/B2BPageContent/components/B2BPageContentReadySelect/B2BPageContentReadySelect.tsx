"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Skeleton } from "antd";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { B2BReadySelectButton } from "./components";
import { useGetB2BReadyListQuery } from "@lib/store/api/APIs/B2BAPI";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const B2BPageContentReadySelect: React.FC = () => {
	const t = useTranslations("B2BPageContentReadySelect");
	const containerRef = useRef<HTMLElement>(null);
	const { data: ReadyList = [], isLoading } = useGetB2BReadyListQuery();

	useGSAP(
		() => {
			if (isLoading) return;

			const h2Split = SplitText.create(".h2-text", {
				type: "words, lines",
				mask: "lines",
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
				defaults: {
					duration: 0.4,
					ease: "power3.out",
				},
			});

			tl.from(containerRef.current, {
				y: -60,
				duration: 0.6,
				opacity: 0,
			})
				.from(h2Split.words, {
					yPercent: 100,
					stagger: 0.05,
				})
				.from(".ready-selected", {
					opacity: 0,
					x: -25,
					stagger: 0.1,
				});
		},
		{ scope: containerRef, dependencies: [isLoading] },
	);

	return (
		<>
			{isLoading ? (
				<section className='flex flex-col gap-6 w-[30%]'>
					<Skeleton active />
					<Skeleton active />
					<Skeleton active />
				</section>
			) : (
				<section
					ref={containerRef}
					className='flex flex-col p-8 border border-[#C9C4D3] rounded-xl gap-8 w-[30%] h-fit sticky top-30 max-md:static max-md:w-full'>
					<h2 className='text-[12px] text-[#090030] font-bold h2-text'>
						{t("h2_text")}
					</h2>
					<section className='flex flex-col gap-6'>
						{ReadyList.map((data, index) => (
							<B2BReadySelectButton
								key={index + 1}
								name={data.name}
								content={data.b2b_type}
								refParant={containerRef}
								index={index}
							/>
						))}
					</section>
				</section>
			)}
		</>
	);
};
