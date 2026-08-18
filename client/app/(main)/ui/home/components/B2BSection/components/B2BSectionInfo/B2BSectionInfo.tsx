"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const B2BSectionInfo: React.FC = () => {
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
					ease: "power3.out",
					duration: 0.6,
					stagger: 0.05,
				},
			});

			const h4SplitParent = new SplitText(".h4-text", {
				type: "words",
				wordsClass: "inline-block overflow-hidden",
			});

			const h4SplitChild = new SplitText(h4SplitParent.words, {
				type: "words",
				wordsClass: "overflow-hidden",
			});

			const h1SplitParent = new SplitText(".h1-text", {
				type: "words",
				wordsClass: "inline-block overflow-hidden",
			});

			const h1SplitChild = new SplitText(h1SplitParent.words, {
				type: "words",
				wordsClass: "overflow-hidden",
			});

			const pSplitParent = new SplitText(".p-text", {
				type: "words",
				wordsClass: "inline-block overflow-hidden",
			});

			const pSplitChild = new SplitText(pSplitParent.words, {
				type: "words",
				wordsClass: "overflow-hidden",
			});

			tl.from(
				h4SplitChild.words,
				{
					yPercent: 110,
				},
				"<+=0.6",
			)
				.from(
					h1SplitChild.words,
					{
						yPercent: 100,
					},
					"<+=0.6",
				)
				.from(pSplitChild.words, {
					yPercent: 105,
					stagger: 0.05,
				});
		},
		{ scope: containerRef },
	);

	return (
		<section ref={containerRef} className='flex flex-col gap-4'>
			<section className='flex flex-col gap-4'>
				<h4 className='text-[12px] text-[#090030] font-bold h4-text'>
					NÁSTROJ PRO BRANDY A DISTRIBUTORY
				</h4>
				<h1 className='text-[#090030] text-[48px] font-bold h1-text max-md:text-[40px]'>
					B2B Eventy
				</h1>
			</section>
			<p className='max-w-146 text-[18px] text-[#484551] leading-[28.8px] p-text max-md:text-[16px] max-md:leading-5'>
				Moduly prostoru jsou zbaveny identity – žijí zde jako nástroj pronájmu
				pro potřeby vaší značky. Ideální pro školení, launch produktů a
				prezentace.
			</p>
		</section>
	);
};
