"use client";

import { useRef } from "react";
import { useGetRoomsTopListQuery } from "@app/lib/store/api/APIs/RoomsAPI";
import { ProstoryCard } from "@app/components";

export const ProstorySectionContent: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { data: RoomList = [], isLoading } = useGetRoomsTopListQuery();

	return (
		<section
			ref={containerRef}
			className='flex flex-row justify-between gap-6 max-md:flex-col max-md:items-center'>
			{isLoading
				? null
				: RoomList.map((data, index) => (
						<ProstoryCard
							key={index + 1}
							index={index + 1}
							id={data.id}
							title={data.name}
							photo={data.photo}
							classname='prostor-card'
						/>
					))}
		</section>
	);
};
