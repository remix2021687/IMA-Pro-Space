"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "@i18n/routing";
import { useAppDispatch } from "@lib/store/hooks";
import { useTranslations } from "next-intl";
import { Close } from "@lib/store/slice/OpenMenuSlice";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

type LinksType = {
	id: string;
	label: string;
	path: string;
	onclick: () => void;
};

export const NavLink: React.FC = () => {
	const t = useTranslations("Header");
	const containerRef = useRef<HTMLElement>(null);
	const LineRef = useRef<HTMLSpanElement>(null);
	const dispatch = useAppDispatch();
	const { contextSafe } = useGSAP();
	const pathname = usePathname();

	const LinksData: LinksType[] = [
		{
			id: "prostory",
			label: t("prostory_text"),
			path: "/",
			onclick: () => {
				dispatch(Close());
				scrollToAction("#prostory");
			},
		},
		{
			id: "B2B",
			label: "B2B",
			path: "/",
			onclick: () => {
				scrollToAction("#B2B");
				dispatch(Close());
			},
		},
		{
			id: "contact",
			label: t("contact_text"),
			path: "/",
			onclick: () => {
				scrollToAction("#contact");
				dispatch(Close());
			},
		},
	];

	const scrollToAction = contextSafe((target: string | HTMLElement) => {
		gsap.to(window, {
			scrollTo: {
				y: target,
				offsetY: 120,
				autoKill: true,
			},
			duration: 1.2,
			ease: "power3.out",
		});
	});

	useGSAP(
		() => {
			const viewPortGSAP = gsap.matchMedia();

			viewPortGSAP.add("(min-width: 768px)", () => {
				const links = gsap.utils.toArray<HTMLAnchorElement>(".links");

				LinksData.forEach((link, index) => {
					const target = document.getElementById(link.id);

					if (pathname === "/") {
						ScrollTrigger.create({
							trigger: target,
							start: "top 50%",
							end: "bottom 50%",
							refreshPriority: 0,
							onToggle: () => {
								gsap.to(LineRef.current, {
									left: links[index].offsetLeft,
									width: links[index].offsetWidth,
									duration: 0.3,
									ease: "power3.out",
								});
							},
						});
					}
				});
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-row items-center justify-center gap-16 font-bold text-[#484551] max-md:flex-col max-md:gap-3 relative'>
			{LinksData.map((data) => {
				return (
					<Link
						onClick={data.onclick}
						key={data.id}
						href={data.path}
						className='links'>
						{data.label}
					</Link>
				);
			})}
			<span
				ref={LineRef}
				className='h-0.5 bg-[#090030] absolute top-full left-0'></span>
		</section>
	);
};
