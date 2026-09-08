"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

interface IB2BReadySelectButton {
	name: string;
	content: {
		name: string;
	}[];
	refParant: RefObject<HTMLElement | null>;
}

export const B2BReadySelectButton: React.FC<IB2BReadySelectButton> = ({
	name,
	content,
	refParant,
}) => {
	const { contextSafe } = useGSAP({ scope: refParant });

	const resulte = content.map((item) => item.name).join(" + ");

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
	return (
		<section
			onMouseEnter={onHover}
			onMouseLeave={resetEffect}
			// onClick={onClick}
			className='flex flex-row items-center justify-between px-8 py-6 w-full rounded-xl cursor-pointer listEl border border-[#C9C4D3]'>
			<h3 className='text-[18px] text-[#1C1B21] font-medium'>{name}</h3>
			<span className='text-[14px] text-[#20026E] font-bold'>{resulte}</span>
		</section>
	);
};
