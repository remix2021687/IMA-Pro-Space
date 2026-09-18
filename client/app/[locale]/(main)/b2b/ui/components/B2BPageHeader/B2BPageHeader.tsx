"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import { useTranslations } from "next-intl";

export const B2BPageHeader: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const t = useTranslations("B2BPageHeader");

	useGSAP(() => {}, { scope: containerRef });

	return (
		<section className='flex flex-row justify-between items-end w-full max-md:flex-col max-md:items-start max-sm:text-center max-sm:items-center'>
			<section className='flex flex-col gap-4'>
				<h4 className='text-[12px] text-[#090030] font-bold max-sm:text-[10px]'>
					{t("h4_text")}
				</h4>
				<h2 className='text-[48px] text-[#090030] font-bold max-sm:text-[30px]'>
					{t("h2_text")}
				</h2>
			</section>
			<p className='max-w-md text-[18px] text-[#484551] font-medium max-sm:text-[14px]'>
				{t("p_text")}
			</p>
		</section>
	);
};
