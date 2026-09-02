"use client";

import { useState } from "react";
import { FilterButton } from "./components";
import { useGetRoomsListQuery } from "@lib/store/api/APIs/RoomsAPI";
import { ProstoryCard } from "@app/components";

export const RoomListPageContent: React.FC = () => {
	const { data: RoomList, isLoading } = useGetRoomsListQuery();
	const [isActiveFilter, setIsActiveFilter] = useState("VŠE");

	const ButtonList: Array<{ name: string; onClick: () => void }> = [
		{
			name: "VŠE",
			onClick: () => {
				setIsActiveFilter("VŠE");
			},
		},
		{
			name: "KABINETY",
			onClick: () => {
				setIsActiveFilter("KABINETY");
			},
		},
		{
			name: "SÁL & EVENTY",
			onClick: () => {
				setIsActiveFilter("SÁL & EVENTY");
			},
		},
		{
			name: "VENKOVNÍ PROSTORY",
			onClick: () => {
				setIsActiveFilter("VENKOVNÍ PROSTORY");
			},
		},
	];

	return (
		<section className='flex flex-col gap-8 w-full'>
			<section className='flex flex-row items-center gap-4'>
				{ButtonList.map((data, index) => (
					<FilterButton
						key={index + 1}
						name={data.name}
						onClick={data.onClick}
						activeButton={isActiveFilter === data.name}
					/>
				))}
			</section>
			<section className='flex flex-row gap-6'>
				{isLoading
					? null
					: RoomList?.map((data, index) => (
							<ProstoryCard
								key={index + 1}
								id={data.id}
								title={data.name}
								photo={data.photo}
							/>
						))}
			</section>
		</section>
	);
};
