"use client";

import { useState, useRef } from "react";
import { usePathname, useRouter } from "@i18n/routing";
import { CaretDownIcon } from "@phosphor-icons/react";
import { useLocale } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const I18nButtonChange: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const router = useRouter();
	const locale = useLocale();
	const { contextSafe } = useGSAP({ scope: containerRef });

	const langChoose: Array<{ title: string; value: string }> = [
		{
			title: "Čeština",
			value: "cz",
		},
		{
			title: "Русский",
			value: "ru",
		},
	];

	const hendleChange = (newLocale: string) => {
		router.replace(pathname, { locale: newLocale });
	};

	useGSAP(
		() => {
			// gsap.set(".dropdown-el", { y: 10, opacity: 0 });

			tl.current = gsap
				.timeline()
				.from(
					".icon-el",
					{
						rotate: 180,
						duration: 0.6,
						ease: "power3.inOut",
					},
					0,
				)
				.from(
					".dropdown-el",
					{
						y: -10,
						opacity: 0,
						duration: 0.6,
						ease: "power3.inOut",
					},
					0,
				);
		},
		{ scope: containerRef },
	);

	useGSAP(
		() => {
			if (isOpen) {
				tl.current?.play();
			} else {
				tl.current?.reverse();
			}
		},
		{ dependencies: [isOpen] },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-col items-center justify-center relative'>
			<button
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				className='flex flex-row items-center justify-center gap-2 cursor-pointer button-el'>
				{locale.toLocaleUpperCase()}{" "}
				<CaretDownIcon
					size={15}
					color='#484551'
					weight='bold'
					className='icon-el'
				/>
			</button>
			<section className='flex flex-col gap-3 px-5 py-3 absolute top-12 -left-20 z-20 bg-white border border-[#C9C4D3] rounded-xl dropdown-el'>
				{langChoose.map((data, index) => (
					<button
						key={index + 1}
						onClick={() => hendleChange(data.value)}
						className='cursor-pointer px-5 py-2 lang-button-el'>
						{data.title}
					</button>
				))}
			</section>
		</section>
	);
};
