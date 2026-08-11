"use client";

import { motion } from "motion/react";

export const HeaderMobileMenu: React.FC = () => {
	return (
		<motion.section
			initial={{ top: "-100%" }}
			animate={{ top: "0%" }}
			exit={{ top: "-100%" }}
			className='flex flex-col w-full h-full absolute top-0 left-0 bg-white'></motion.section>
	);
};
