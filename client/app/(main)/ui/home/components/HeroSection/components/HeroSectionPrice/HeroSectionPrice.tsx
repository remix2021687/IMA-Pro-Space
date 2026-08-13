"use client";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const HeroSectionPrice: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const priceRef = useRef<HTMLSpanElement>(null);

	useGSAP(
		() => {
			if (!containerRef.current || !priceRef.current) return;

			const spanSplit = new SplitText(".span-text", { type: "words" });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 85%",
					once: true,
				},
			});

			// 3. Безопасная анимация через fromTo
			tl.fromTo(
				containerRef.current,
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
			).from(
				spanSplit.words,
				{
					y: -10,
					opacity: 0,
					stagger: 0.05,
					ease: "power2.out",
				},
				"-=0.4",
			);

			return () => {
				spanSplit.revert();
			};
		},
		{ scope: containerRef },
	);
	return (
		<section
			ref={containerRef}
			className='flex flex-col gap-2 px-6 py-4 bg-[#F7F2FA] border-2 border-[#C9C4D3] rounded-lg'>
			<span className='text-[#797583] text-[10px] font-bold tracking-[1px] span-text'>
				CENA OD
			</span>
			<h2 className='text-[#090030] text-[24px] font-semibold h2-text'>
				1 200 Kč / hod
			</h2>
		</section>
	);
};
