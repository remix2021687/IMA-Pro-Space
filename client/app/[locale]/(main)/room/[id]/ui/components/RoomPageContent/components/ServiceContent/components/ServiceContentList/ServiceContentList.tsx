"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { ServiceContentBox } from "./components";

interface IServiceContentList {
	data: {
		name: string;
	}[];
}

export const ServiceContentList: React.FC<IServiceContentList> = ({ data }) => {
	const t = useTranslations("ServiceContentList");
	const containerRef = useRef<HTMLElement>(null);

	return (
		<section
			ref={containerRef}
			className='flex flex-col gap-6 max-h-100 overflow-y-auto'>
			{data ? (
				data.map((data, index) => (
					<ServiceContentBox
						name={data.name}
						parentRef={containerRef}
						key={index + 1}
					/>
				))
			) : (
				<section className='flex flex-col items-center justify-center h-25 text-center'>
					<h2 className='text-[18px] text-[#484551]'>{t("h2_text")}</h2>
				</section>
			)}
		</section>
	);
};
