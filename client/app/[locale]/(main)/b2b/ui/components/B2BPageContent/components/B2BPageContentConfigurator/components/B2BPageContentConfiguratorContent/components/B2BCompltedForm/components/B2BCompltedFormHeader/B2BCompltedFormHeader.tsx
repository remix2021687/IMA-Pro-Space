"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

interface IB2BCompltedFormHeader {
	email?: string;
	parantTL: gsap.core.Timeline | null;
}

export const B2BCompltedFormHeader: React.FC<IB2BCompltedFormHeader> = ({
	email,
	parantTL,
}) => {
	const containerRef = useRef<HTMLElement>(null);
	const t = useTranslations("B2BCompltedFormHeader");

	useGSAP(
		() => {
			if (!containerRef.current || !parantTL) return;

			const h2Split = SplitText.create(".h2-text", {
				type: "words, lines",
				mask: "lines",
			});

			const pSplit = SplitText.create(".p-text", {
				type: "words, lines",
				mask: "lines",
			});

			parantTL
				.from(h2Split.words, {
					yPercent: 100,
					stagger: 0.1,
				})
				.from(pSplit.words, {
					yPercent: 100,
					duration: 0.5,
					stagger: 0.05,
				});
		},
		{ scope: containerRef, dependencies: [parantTL] },
	);

	return (
		<section ref={containerRef} className='flex flex-col gap-2 items-center'>
			<h2 className='text-[32px] text-[#1C1B21] font-semibold h2-text'>
				{t("h2_text")}
			</h2>
			<p className='max-w-140 text-[16px] text-[#484551] leading-[25.6px] text-center p-text'>
				{t("p_text.step_1")} {""}
				<span className='text-[#1C1B21] font-semibold'>{email}</span>.{" "}
				{t("p_text.step_2")}
			</p>
		</section>
	);
};
