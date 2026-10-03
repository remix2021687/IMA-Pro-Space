"use client";

import { useRef, useState } from "react";
import { useLocale } from "next-intl";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import gsap from "gsap";
import clsx from "clsx";

interface INavButtons {
	text: string;
	type: "home" | "rooms";
	herf: string;
	index: number;
}

gsap.registerPlugin(ScrollTrigger);

export const NavButtons: React.FC<INavButtons> = ({
	text,
	type,
	herf,
	index,
}) => {
	const [isHover, setIsHover] = useState(false);
	const buttonRef = useRef<HTMLAnchorElement>(null);
	const locale = useLocale();

	useGSAP(
		() => {
			const button = buttonRef.current;

			gsap.to(button, {
				scale: isHover ? 1.05 : 1,
				duration: 0.2,
				ease: "power3.out",
			});

			switch (type) {
				case "home":
					gsap.to(button, {
						backgroundColor: isHover ? "white" : "#21026E",
						color: isHover ? "black" : "white",
						duration: 0.3,
						ease: "power3.out",
					});
					break;

				case "rooms":
					gsap.to(button, {
						backgroundColor: isHover ? "white" : "#EBE6EE",
						duration: 0.3,
						ease: "power3.out",
					});
					break;
			}
		},
		{ scope: buttonRef, dependencies: [isHover] },
	);

	useGSAP(
		() => {
			if (buttonRef.current) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: buttonRef.current,
					start: "top 80%",
					once: true,
				},
			});

			tl.from(
				buttonRef.current,
				{
					opacity: 0,
					y: 30,
					duration: 0.3,
					ease: "power3.out",
				},
				index * 0.3,
			);
		},
		{ scope: buttonRef },
	);

	const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const button = e.currentTarget;

		gsap.to(button, {
			scale: 0.96,
			yoyo: true,
			repeat: 1,
			duration: 0.2,
			ease: "power3.out",
		});
	};

	return (
		<Link
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={onClick}
			ref={buttonRef}
			className={clsx(
				"px-8 py-4 text-[18px] font-medium rounded-lg cursor-pointer",
				{
					"bg-[#21026E] text-white border-2 border-[#21026E]": type === "home",
					"bg-[#EBE6EE] text-black border-2 border-[#EBE6EE]": type === "rooms",
				},
			)}
			href={`/${locale}/${herf}`}>
			{text}
		</Link>
	);
};
