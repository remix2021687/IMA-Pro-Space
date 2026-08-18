"use client";

import Image from "next/image";
import { CheckCircleIcon } from "@phosphor-icons/react";

import bg from "@public/svg/svg-bg.svg";

export const B2BSection: React.FC = () => {
	const ListData: Array<{ name: string }> = [
		{ name: "Sál + Přenos: Pro prezentace značky" },
		{ name: "Sál + Kabinety: Pro školení distributorů" },
		{ name: "Sál + Terasa: Pro launch produktu" },
	];

	return (
		<section className='flex flex-row items-center justify-between w-[80%]'>
			<section className='flex flex-col gap-8'>
				<section className='flex flex-col gap-4'>
					<section className='flex flex-col gap-4'>
						<h4 className='text-[12px] text-[#090030] font-bold'>
							NÁSTROJ PRO BRANDY A DISTRIBUTORY
						</h4>
						<h1 className='text-[#090030] text-[48px] font-bold'>B2B Eventy</h1>
					</section>
					<p className='max-w-146 text-[18px] text-[#484551] leading-[28.8px]'>
						Moduly prostoru jsou zbaveny identity – žijí zde jako nástroj
						pronájmu pro potřeby vaší značky. Ideální pro školení, launch
						produktů a prezentace.
					</p>
				</section>
				<section className='flex flex-col gap-4'>
					{ListData.map((data, index) => (
						<section
							key={index + 1}
							className='flex flex-row items-center gap-2'>
							<CheckCircleIcon size={20} weight='bold' color='#090030' />
							<h4 className='text-[#484551] text-[16px]'>{data.name}</h4>
						</section>
					))}
				</section>
				<button className='w-fit px-12 py-3.75 rounded-full bg-[#21026E] text-[16px] text-white font-bold cursor-pointer'>
					Odeslat poptávku
				</button>
			</section>

			<Image src={bg} alt='bg' loading='lazy' className='size-125' />
		</section>
	);
};
