"use client";

import Image from "next/image";
import { MapPinIcon, MoneyIcon } from "@phosphor-icons/react";

import { useGetRoomByIDQuery } from "@lib/store/api/APIs/RoomsAPI";
import img from "@public/img/DSC09613-2.jpg";

interface IRoomPageHeader {
	data: {
		name: string;
		description: string;
		photo: string;
	};
}

export const RoomPageHeader: React.FC<IRoomPageHeader> = ({ data }) => {
	const list: Array<{ icon: React.ReactElement; name: string }> = [
		{
			icon: <MapPinIcon size={20} color='#797583' weight='bold' />,
			name: "Křižíkova 2136/2A, 186 00 Karlín",
		},
		{
			icon: <MoneyIcon size={20} color='#797583' weight='bold' />,
			name: "1 200 Kč/hod",
		},
	];

	return (
		<section className='flex flex-row items-center justify-between w-full'>
			<section className='flex flex-col gap-6 w-[50%]'>
				<h2 className='text-[48px] text-[#090030] font-bold'>{data.name}</h2>
				<section className='flex flex-col gap-2'>
					{list.map((data, index) => (
						<span
							className='flex flex-row items-center gap-2 text-[18px] text-[#484551] font-medium'
							key={index + 1}>
							{data.icon} {data.name}
						</span>
					))}
				</section>
				<hr className='text-[#C9C4D3] w-md' />
				<p className='text-[#484551] text-[18px] leading-6.5 max-w-md'>
					{data.description}
				</p>
			</section>
			<Image
				src={data.photo}
				loading='eager'
				alt='photo'
				width={600}
				height={600}
				className='rounded-xl'
			/>
		</section>
	);
};
