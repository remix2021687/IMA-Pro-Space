"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const ContactSectionList: React.FC = () => {
	const listRef = useRef<HTMLElement>(null);

	const ListData: Array<{ name: string; text: string }> = [
		{
			name: "Adresa",
			text: "Českomoravská 2510/19 190 00 Praha 9",
		},

		{
			name: "Spojení",
			text: "+420 774 695 739 info@imaonline.cz",
		},
	];

	useGSAP(
		() => {
			const list = gsap.utils.toArray<HTMLElement>(".listEL");

			list.forEach((ls) => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: ls,
						start: "top 80%",
						once: true,
					},

					defaults: {
						ease: "power3.out",
						duration: 0.6,
						stagger: 0.05,
					},
				});

				const h5Split = SplitText.create(".h5-text", {
					type: "words, lines",
					mask: "lines",
				});

				const pSplit = SplitText.create(".p-text", {
					type: "words, lines",
					mask: "lines",
				});

				tl.from(
					h5Split.words,
					{
						yPercent: 100,
					},
					"<+=0.6",
				).from(pSplit.words, {
					yPercent: 100,

					onComplete: () => {
						h5Split.revert();
						pSplit.revert();
					},
				});
			});
		},
		{ scope: listRef },
	);

	return (
		<section ref={listRef} className='flex flex-col gap-6 max-md:text-center'>
			{ListData.map((data, index) => (
				<section key={index + 1} className='flex flex-col gap-2 listEL'>
					<h5 className='text-[18px] text-[#1C1B20] font-bold h5-text'>
						{data.name}
					</h5>
					<p className='text-[14px] text-[#484551] font-medium wrap-break-word w-45 p-text'>
						{data.text}
					</p>
				</section>
			))}
		</section>
	);
};
