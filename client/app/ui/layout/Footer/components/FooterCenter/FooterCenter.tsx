"use client";

import { useTranslations } from "next-intl";

export const FooterCenter: React.FC = () => {
	const t = useTranslations("FooterCenter");

	return (
		<section className='flex flex-col gap-1 text-[#484551]'>
			<h4 className='text-[16px]'>{t("h4_text")}:</h4>
			<section className='flex flex-col gap-2 text-[14px]'>
				<span className='px-1.5'>info@imaonline.cz</span>
				<span className='px-1.5'>+420 774 695 739</span>
			</section>
		</section>
	);
};
