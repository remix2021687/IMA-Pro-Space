"use client";

import Link from "next/link";
import { useAppDispatch } from "@lib/store/hooks";
import { useTranslations } from "next-intl";
import { Close } from "@lib/store/slice/OpenMenuSlice";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollToPlugin);

type LinksType = {
	label: string;
	path: string;
	onclick: () => void;
};

export const NavLink: React.FC = () => {
	const dispatch = useAppDispatch();
	const t = useTranslations("Header");
	const { contextSafe } = useGSAP();

	const Linsk: LinksType[] = [
		{
			label: t("prostory_text"),
			path: "/",
			onclick: () => {
				dispatch(Close());
				scrollToAction("#prostory");
			},
		},
		{
			label: "B2B",
			path: "/",
			onclick: () => {
				scrollToAction("#B2B");
				dispatch(Close());
			},
		},
		{
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

	return (
		<section className='flex flex-row items-center justify-center gap-16 font-bold text-[#484551] max-md:flex-col max-md:gap-3'>
			{Linsk.map((data, index) => {
				return (
					<Link onClick={data.onclick} key={index + 1} href={data.path}>
						{data.label}
					</Link>
				);
			})}
		</section>
	);
};
