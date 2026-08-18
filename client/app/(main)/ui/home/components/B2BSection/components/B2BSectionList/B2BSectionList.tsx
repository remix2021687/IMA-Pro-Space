"use client";

import { CheckCircleIcon } from "@phosphor-icons/react";

export const B2BSectionList: React.FC = () => {
	const ListData: Array<{ name: string }> = [
		{ name: "Sál + Přenos: Pro prezentace značky" },
		{ name: "Sál + Kabinety: Pro školení distributorů" },
		{ name: "Sál + Terasa: Pro launch produktu" },
	];
	return (
		<section className='flex flex-col gap-4'>
			{ListData.map((data, index) => (
				<section key={index + 1} className='flex flex-row items-center gap-2'>
					<CheckCircleIcon size={20} weight='bold' color='#090030' />
					<h4 className='text-[#484551] text-[16px]'>{data.name}</h4>
				</section>
			))}
		</section>
	);
};
