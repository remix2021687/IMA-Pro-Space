"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export const FooterRight: React.FC = () => {
	const t = useTranslations("FooterRight");

	const LinkData: Array<{ name: string; path: string }> = [
		{
			name: t("step_1"),
			path: "/",
		},
		{
			name: t("step_2"),
			path: "/",
		},
		{
			name: t("step_3"),
			path: "/",
		},
	];

	return (
		<section className='flex flex-row items-center gap-20 text-[14px] font-bold max-md:flex-col max-md:gap-5'>
			{LinkData.map((data, index) => (
				<Link key={index + 1} href={data.path}>
					{data.name}
				</Link>
			))}
		</section>
	);
};
