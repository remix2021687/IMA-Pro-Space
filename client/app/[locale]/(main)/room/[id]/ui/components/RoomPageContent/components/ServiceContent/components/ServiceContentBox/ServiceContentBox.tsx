"use client";

import { CheckIcon } from "@phosphor-icons/react";

export const ServiceContentBox: React.FC<{ name: string }> = ({ name }) => {
	return (
		<section className='flex flex-row items-center gap-6 p-4 w-full bg-white border border-[#C9C4D3] rounded-lg'>
			<section className='flex flex-col justify-center items-center rounded-full w-10 h-10 bg-[#F1ECF4] border border-[#C9C4D3]'>
				<CheckIcon size={20} color='#605980' weight='bold' />
			</section>
			<h2 className='text-[#1C1B20] text-[18px] font-medium'>{name}</h2>
		</section>
	);
};
