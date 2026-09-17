"use client";

import { XIcon } from "@phosphor-icons/react";

export const CookieConfirm: React.FC = () => {
	return (
		<section className='top-[75%] left-[0%] fixed p-8 bg-white border-[#C9C4D3] border rounded-xl w-[25%]'>
			<section className='flex flex-row justify-between items-start'>
				<h2 className='text-[24px] font-semibold'>Nastavení cookies</h2>
				<XIcon size={12} color='#484551' weight='bold' />
			</section>
			<p>
				Pro zajištění správného fungování webu a analýzu návštěvnosti využíváme
				nezbytné a analytické soubory cookies.
			</p>
			<section>
				<button>Přijmout vše</button>
				<button>Pouze nezbytné</button>
			</section>
		</section>
	);
};
