"use client";

import { motion } from "motion/react";
import { NavLink } from "../";

export const HeaderMobileMenu: React.FC = () => {
	return (
		<motion.section
			initial={{ top: "-100%" }}
			animate={{ top: "0%" }}
			exit={{ top: "-100%" }}
			className='fixed top-0 left-0 flex flex-col items-center justify-center gap-12 w-screen h-screen bg-white z-10'>
			<h2 className={"text-[34px] text-[#090030] font-bold uppercase"}>
				IMA Pro Space
			</h2>
			<NavLink />
			<button className='px-6 py-3.5 text-white text-[14px] rounded-full bg-[#21026E] font-bold cursor-pointer'>
				Rezervovat
			</button>
		</motion.section>
	);
};
