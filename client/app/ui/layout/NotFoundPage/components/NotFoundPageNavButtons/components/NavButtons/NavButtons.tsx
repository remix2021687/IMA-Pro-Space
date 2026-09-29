"use client";

import { useRef, useState } from "react";
import { useLocale } from "next-intl";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import gsap from "gsap";
import clsx from "clsx";

interface INavButtons {
	text: string;
	type: "home" | "rooms";
	herf: string;
}

export const NavButtons: React.FC<INavButtons> = ({ text, type, herf }) => {
	const [isHover, setIsHover] = useState(false);
	const buttonRef = useRef<HTMLAnchorElement>(null);
	const locale = useLocale();

	useGSAP(
		() => {
			const button = buttonRef.current;
			gsap.to(button, {
				scale: isHover ? 1.07 : 1,
				duration: 0.2,
				ease: "power3.out",
			});
		},
		{ scope: buttonRef, dependencies: [isHover] },
	);

	return (
		<Link
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			ref={buttonRef}
			className={clsx(
				"px-8 py-4 text-[18px] font-medium rounded-lg cursor-pointer",
				{
					"bg-[#21026E] text-white": type === "home",
					"bg-[#EBE6EE] text-black": type === "rooms",
				},
			)}
			href={`/${locale}/${herf}`}>
			{text}
		</Link>
	);
};
