"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const B2BPageContentReadySelect: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { contextSafe } = useGSAP({ scope: containerRef });
	const ListPackages: Array<{ name: string; content: string }> = [
		{
			name: "Prezentace značky",
			content: "Sál + Přenos",
		},
		{
			name: "Školení distributora",
			content: "Sál + Kabinety",
		},
		{
			name: "Launch produktu",
			content: "Sál + Terasa",
		},
	];

	const onHover = contextSafe((e: React.MouseEvent<HTMLElement>) => {
		const list = e.currentTarget;
		const h3 = list.querySelector("h3");
		const span = list.querySelector("span");

		gsap.to(list, {
			scale: 1.05,
			backgroundColor: "#20026E",
			color: "white",
			ease: "power3.out",
			duration: 0.3,
		});

		gsap.to(h3, {
			color: "white",
			ease: "power3.out",
			duration: 0.3,
		});

		gsap.to(span, {
			color: "white",
			ease: "power3.out",
			duration: 0.3,
		});
	});

	const resetEffect = contextSafe((e: React.MouseEvent<HTMLElement>) => {
		const list = e.currentTarget;
		const h3 = list.querySelector("h3");
		const span = list.querySelector("span");

		gsap.to(list, {
			scale: 1,
			backgroundColor: "white",
			ease: "power3.out",
			duration: 0.3,
		});

		gsap.to(h3, {
			color: "#1C1B21",
			ease: "power3.out",
			duration: 0.3,
		});

		gsap.to(span, {
			color: "#20026E",
			ease: "power3.out",
			duration: 0.3,
		});
	});

	// const onClick = contextSafe((e: React.MouseEvent<HTMLElement>) => {
	// });

	return (
		<section
			ref={containerRef}
			className='flex flex-col p-8 border border-[#C9C4D3] rounded-xl gap-8 w-[30%] h-fit sticky top-30'>
			<h2 className='text-[12px] text-[#090030] font-bold'>
				KOMBINACE PRO ÚKOL
			</h2>
			<section className='flex flex-col gap-6'>
				{ListPackages.map((data, index) => (
					<section
						key={index + 1}
						onMouseEnter={onHover}
						onMouseLeave={resetEffect}
						// onClick={onClick}
						className='flex flex-row items-center justify-between px-8 py-6 w-full rounded-xl cursor-pointer listEl border border-[#C9C4D3]'>
						<h3 className='text-[18px] text-[#1C1B21] font-medium'>
							{data.name}
						</h3>
						<span className='text-[14px] text-[#20026E] font-bold'>
							{data.content}
						</span>
					</section>
				))}
			</section>
		</section>
	);
};
