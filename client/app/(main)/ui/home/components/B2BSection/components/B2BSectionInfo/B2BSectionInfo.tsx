"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const B2BSectionInfo: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);

	useGSAP(() => {}, { scope: containerRef });

	return (
		<section className='flex flex-col gap-4'>
			<section className='flex flex-col gap-4'>
				<h4 className='text-[12px] text-[#090030] font-bold h4-text'>
					NÁSTROJ PRO BRANDY A DISTRIBUTORY
				</h4>
				<h1 className='text-[#090030] text-[48px] font-bold h1-text'>
					B2B Eventy
				</h1>
			</section>
			<p className='max-w-146 text-[18px] text-[#484551] leading-[28.8px] p-text'>
				Moduly prostoru jsou zbaveny identity – žijí zde jako nástroj pronájmu
				pro potřeby vaší značky. Ideální pro školení, launch produktů a
				prezentace.
			</p>
		</section>
	);
};
