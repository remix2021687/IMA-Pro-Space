"use client";

import { useTranslations } from "next-intl";

export const FooterLeft: React.FC = () => {
	const t = useTranslations("FooterLeft");
	return (
		<section className='flex flex-col'>
			<h2 className={"text-[24px] text-[#090030] font-bold"}>IMA Pro Space</h2>
			<p className='text-[#484551] text-[14px]'>{t("p_text")}</p>
		</section>
	);
};
