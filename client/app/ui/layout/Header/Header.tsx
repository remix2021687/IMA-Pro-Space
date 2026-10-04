"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence } from "motion/react";
import { useAppSelector } from "@lib/store/hooks";
import {
	OpenMobileMenuButton,
	HeaderMobileMenu,
	I18nButtonChange,
} from "./components";
import { NavLink } from "./components";
import gsap from "gsap";

export const Header: React.FC = () => {
	const locale = useLocale();
	const router = useRouter();
	const t = useTranslations("Header");
	const { contextSafe } = useGSAP();
	const isOpenState = useAppSelector((state) => state.OpenMenuSlice.isOpen);

	const onHover = contextSafe((btn: React.MouseEvent<HTMLButtonElement>) => {
		const button = btn.currentTarget;

		gsap.to(button, {
			scale: 1.05,
			backgroundColor: "white",
			color: "black",
			duration: 0.3,
			ease: "power2.out",
		});
	});

	const resetEffect = contextSafe(
		(btn: React.MouseEvent<HTMLButtonElement>) => {
			const button = btn.currentTarget;

			gsap.to(button, {
				scale: 1,
				backgroundColor: "#21026E",
				color: "white",
				duration: 0.3,
				ease: "power2.out",
			});
		},
	);

	const onClick = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.currentTarget;

		gsap.to(button, {
			scale: 0.96,
			duration: 0.1,
			ease: "power2.out",
			yoyo: true,
			repeat: 1,
		});

		router.push(`/${locale}/room/`);
	});

	return (
		<>
			<AnimatePresence>{isOpenState && <HeaderMobileMenu />}</AnimatePresence>

			<nav className='flex sticky top-0 flex-row items-center justify-between px-6 h-20 border-b-2 border-[#C9C4D3] bg-white z-10 shadow-xl'>
				{/*Потом поменять когда будет лого*/}
				<Link
					href={`/${locale}/`}
					className={"text-[24px] text-[#090030] font-bold"}>
					IMA Pro Space
				</Link>
				<section className='max-md:hidden'>
					<NavLink />
				</section>
				<section className='flex flex-row gap-5'>
					<section className='flex flex-col items-center justify-center max-md:hidden'>
						<I18nButtonChange />
					</section>
					<button
						onMouseEnter={onHover}
						onMouseLeave={resetEffect}
						onClick={onClick}
						className='px-6 py-3.5 text-white text-[14px] rounded-full bg-[#21026E] font-bold cursor-pointer border-2 border-[#21026E] max-md:hidden'>
						{t("button_text")}
					</button>
				</section>
				<OpenMobileMenuButton />
			</nav>
		</>
	);
};
