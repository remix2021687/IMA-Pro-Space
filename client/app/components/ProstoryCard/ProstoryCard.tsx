"use client";

import Image from "next/image";
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react";

// import { useGSAP } from "@gsap/react";

import img from "@public/img/DSC09905.jpg";

type ProstoryCardType = {
	icon: React.ReactNode;
	name: string;
};

export const ProstoryCard: React.FC = () => {
	const DataList: Array<ProstoryCardType> = [
		{
			icon: <CheckIcon size={20} color='#797583' weight='bold' />,
			name: "15 m",
		},

		{
			icon: <CheckIcon size={20} color='#797583' weight='bold' />,
			name: "Polohovací lehátko",
		},

		{
			icon: <CheckIcon size={20} color='#797583' weight='bold' />,
			name: "Klimatizace",
		},
	];

	return (
		<section className='flex flex-col overflow-hidden rounded-xl border border-[#C9C4D3]'>
			<Image
				src={img}
				alt='img'
				width={388}
				loading='lazy'
				placeholder='blur'
			/>
			<section className='flex flex-col justify-between gap-6 p-8 bg-white border-t border-[#C9C4D3]'>
				<h2 className='text-[24px] text-[#1C1B20] font-semibold'>Kabinet A1</h2>
				<section className='flex flex-col gap-2'>
					{DataList.map((data, index) => (
						<section key={index + 1} className='flex flex-row gap-3'>
							{data.icon}
							<span>{data.name}</span>
						</section>
					))}
				</section>
				<section className='flex flex-col gap-6'>
					<hr className='text-[#C9C4D3]' />
					<section className='flex flex-row items-start justify-between'>
						<h2 className='text-[#090030] text-[16px] font-bold'>
							1 200 Kč / hod
						</h2>
						<ArrowRightIcon
							size={22}
							color='#090030'
							weight='bold'
							className='cursor-pointer'
						/>
					</section>
				</section>
			</section>
		</section>
	);
};
