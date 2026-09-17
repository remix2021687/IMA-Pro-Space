"use client";

import { XIcon } from "@phosphor-icons/react";

export const CookieConfirm: React.FC = () => {
	return (
		<section className='flex flex-col gap-4 top-[70%] left-[73%] fixed p-8 bg-white border-[#C9C4D3] border rounded-xl w-[25%]'>
			<section className='flex flex-row justify-between items-start'>
				<h2 className='text-[24px] font-semibold'>Nastavení cookies</h2>
				<XIcon size={12} color='#484551' weight='bold' />
			</section>
			<p className='text-[#484551] text-[16px] leading-[25.6px]'>
				Pro zajištění správného fungování webu a analýzu návštěvnosti využíváme
				nezbytné a analytické soubory cookies.
			</p>
			<section className='flex flex-row items-center gap-2'>
				<button className='px-6 py-4 bg-[#20026E] text-[12px] text-white font-bold rounded-full cursor-pointer'>
					Přijmout vše
				</button>
				<button className='px-6 py-4 text-[12px] text-black font-bold rounded-full border border-[#C9C4D3]'>
					Pouze nezbytné
				</button>
			</section>
		</section>
	);
};
