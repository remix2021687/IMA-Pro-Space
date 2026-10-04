"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { TextBox } from "@app/components";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

interface IB2BCompltedFormContent {
	resulte: string;
	fullname?: string;
	email?: string;
	date?: string;
	notes?: string;
	parantTL: gsap.core.Timeline | null;
}

export const B2BCompltedFormContent: React.FC<IB2BCompltedFormContent> = ({
	resulte,
	fullname,
	email,
	date,
	parantTL,
}) => {
	const containerRef = useRef<HTMLElement>(null);
	const t = useTranslations("B2BCompltedFormContent");

	useGSAP(
		() => {
			if (!containerRef.current || !parantTL) return;

			const h3Split = SplitText.create(".h3-text", {
				type: "words, lines",
				mask: "lines",
			});

			const spanSplit = SplitText.create(".span-text", {
				type: "chars, lines",
				mask: "lines",
			});

			const revertText = () => {
				h3Split.revert();
				spanSplit.revert();
			};

			parantTL
				.from(containerRef.current, {
					scale: 0,
					duration: 0.6,
				})
				.from(".hr-line", {
					scaleX: 0,
					duration: 0.4,
				})
				.from(h3Split.words, {
					yPercent: 100,
					stagger: 0.08,
					duration: 0.4,
				})
				.from(spanSplit.chars, {
					yPercent: 100,
					stagger: 0.08,
					duration: 0.4,
					onComplete: revertText,
				});
		},
		{ scope: containerRef, dependencies: [parantTL] },
	);

	useGSAP(
		() => {
			if (!containerRef.current || !parantTL) return;
			const textBoxList = gsap.utils.toArray<HTMLElement>(".text-box-el");

			textBoxList.forEach((ls) => {
				parantTL.from(ls, {
					y: -15,
					opacity: 0,
					duration: 0.4,
					stagger: 0.05,
				});
			});
		},
		{ scope: containerRef, dependencies: [parantTL] },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-col gap-4 p-8 w-full border border-[#C9C4D3] max-w-[50%] rounded-xl'>
			<section className='flex flex-col gap-2 w-full'>
				<section className='flex flex-row justify-between'>
					<h3 className='text-[12px] text-[#484551] font-bold h3-text'>
						{t("h3_text")}
					</h3>
					<span className='text-[14px] text-[#20026E] font-bold span-text'>
						B2B
					</span>
				</section>
				<hr className='text-[#C9C4D3] hr-line' />
			</section>
			<section className='flex flex-row justify-between w-full'>
				<section className='flex flex-col gap-6'>
					<TextBox title={resulte} name={t("step_1")} classname='text-box-el' />
					<TextBox
						title={fullname}
						name={t("step_2")}
						classname='text-box-el'
					/>
				</section>
				<section className='flex flex-col gap-6 '>
					<TextBox title={email} name={t("step_3")} classname='text-box-el' />
					<TextBox title={date} name={t("step_4")} classname='text-box-el' />
				</section>
			</section>
		</section>
	);
};
