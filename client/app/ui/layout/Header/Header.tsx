"use client";

import { NavLink } from "./components";
import { useGSAP } from "@gsap/react";
import { AnimatePresence } from "motion/react";
import { useAppSelector } from "@lib/store/hooks";
import { OpenMobileMenuButton, HeaderMobileMenu } from "./components";
import gsap from "gsap";

export const Header: React.FC = () => {
	const { contextSafe } = useGSAP();
	const isOpenState = useAppSelector((state) => state.OpenMenuSlice.isOpen);

	const onHover = contextSafe((btn: React.MouseEvent<HTMLButtonElement>) => {
		const button = btn.currentTarget;

		gsap.to(button, {
			transform: "scale(1.05)",
			border: "2px solid #21026E",
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
				transform: "scale(1)",
				border: "0px solid #21026E",
				backgroundColor: "#21026E",
				color: "white",
				duration: 0.3,
				ease: "power2.out",
			});
		},
	);

	return (
		<nav className='flex flex-row items-center justify-between px-6 h-20 border-b-2 border-[#C9C4D3]'>
			{/*Потом поменять когда будет лого*/}
			<h2 className={"text-[24px] text-[#090030] font-bold"}>IMA Pro Space</h2>
			<section className='max-md:hidden'>
				<NavLink />
			</section>
			<button
				onMouseEnter={onHover}
				onMouseLeave={resetEffect}
				className='px-6 py-3.5 text-white text-[14px] rounded-full bg-[#21026E] font-bold cursor-pointer max-md:hidden'>
				Rezervovat
			</button>

			<AnimatePresence>{isOpenState && <HeaderMobileMenu />}</AnimatePresence>

			<OpenMobileMenuButton />
		</nav>
	);
};
