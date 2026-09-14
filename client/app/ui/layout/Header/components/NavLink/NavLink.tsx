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
	matchPath?: string;
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
			path: "/#prostory",
			matchPath: "/room",
		},
		{
			id: "B2B",
			label: "B2B",
			path: "/#B2B",
			matchPath: "/b2b",
		},
		{
			id: "contact",
			label: t("contact_text"),
			path: "/#contact",
		},
	];

	const scrollToAction = contextSafe((target: string) => {
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

	const handleLinkClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		link: LinksType,
	) => {
		dispatch(Close());

		if (pathname === "/" && link.path.startsWith("/#")) {
			e.preventDefault();
			const targetId = link.path.replace("/", "");
			scrollToAction(targetId);
		}
	};

	useGSAP(
		() => {
			const viewPortGSAP = gsap.matchMedia();

			viewPortGSAP.add("(min-width: 768px)", () => {
				const links = gsap.utils.toArray<HTMLAnchorElement>(".links");

				if (pathname === "/") {
					LinksData.forEach((link, index) => {
						const target = document.getElementById(link.id);

						if (target) {
							ScrollTrigger.create({
								trigger: target,
								start: "top 50%",
								end: "bottom 50%",
								refreshPriority: 0,
								onToggle: (self) => {
									if (self.isActive) {
										gsap.to(LineRef.current, {
											left: links[index].offsetLeft,
											width: links[index].offsetWidth,
											duration: 0.3,
											ease: "power3.out",
										});
									}
								},
							});
						}
					});
				} else {
					const activeIndex = LinksData.findIndex(
						(link) => link.matchPath && pathname.startsWith(link.matchPath),
					);

					if (activeIndex !== -1 && links[activeIndex]) {
						gsap.to(LineRef.current, {
							left: links[activeIndex].offsetLeft,
							width: links[activeIndex].offsetWidth,
							duration: 0.3,
							ease: "power3.out",
						});
					} else {
						gsap.to(LineRef.current, { width: 0, duration: 0.3 });
					}
				}
			});
		},
		{ scope: containerRef, dependencies: [pathname] },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-row items-center justify-center gap-16 font-bold text-[#484551] max-md:flex-col max-md:gap-3 relative'>
			{LinksData.map((data) => {
				return (
					<Link
						onClick={(e) => handleLinkClick(e, data)}
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
