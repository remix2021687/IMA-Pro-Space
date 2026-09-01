"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGetRoomsListQuery } from "@app/lib/store/api/APIs/RoomsAPI";
import { ProstoryCard } from "@app/components";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const ProstorySectionContent: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { data: rooms = [], isLoading } = useGetRoomsListQuery();

	useGSAP(
		() => {
			if (!rooms.length && !isLoading) return;

			const card = gsap.utils.toArray<HTMLElement>(".prostor-card");

			card.forEach((card, index) => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: window.innerWidth <= 768 ? card : containerRef.current,
						start: "top 80%",
						once: true,
					},
					defaults: {
						ease: "power3.out",
						duration: 1,
					},
				});

				const titleEL = card.querySelector(".title-text");
				const PriceEL = card.querySelector(".price-text");
				const LinkEL = card.querySelector(".link");
				const hrEL = card.querySelector(".hr-text");

				const TitleSplit = SplitText.create(titleEL, {
					type: "words, lines",
					mask: "lines",
					autoSplit: true,
					linesClass: "line",
				});

				const PriceSplit = SplitText.create(PriceEL, {
					type: "words, lines",
					mask: "lines",
					autoSplit: true,
					linesClass: "line",
				});

				const revertText = () => {
					TitleSplit.revert();
					PriceSplit.revert();
				};

				tl.from(
					card,
					{
						y: -30,
						opacity: 0,
						stagger: 0.05,
					},
					index * 0.6,
				)
					.from(
						TitleSplit.words,
						{
							yPercent: 100,
							duration: 0.6,
							stagger: 0.05,
						},
						"<+=0.6",
					)
					.from(
						hrEL,
						{
							scaleX: 0,
							duration: 0.8,
						},
						"<+=0.6",
					)
					.from(
						PriceSplit.words,
						{
							yPercent: 105,
							duration: 0.6,
							stagger: 0.05,
						},
						"<+=0.6",
					)
					.from(LinkEL, {
						x: -20,
						opacity: 0,
						duration: 0.6,

						onComplete: revertText,
					});
			});

			ScrollTrigger.refresh();
		},
		{ scope: containerRef, dependencies: [rooms, isLoading] },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-row justify-between gap-6 max-md:flex-col'>
			{rooms.map((data, index) => (
				<ProstoryCard
					key={index + 1}
					id={data.id}
					title={data.name}
					photo={data.photo}
					classname='prostor-card'
				/>
			))}
		</section>
	);
};
