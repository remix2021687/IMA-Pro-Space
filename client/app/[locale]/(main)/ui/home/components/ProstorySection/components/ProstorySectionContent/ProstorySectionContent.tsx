"use client";

import { Skeleton } from "antd";
import { useRef } from "react";
import { useGetRoomsTopListQuery } from "@app/lib/store/api/APIs/RoomsAPI";
import { ProstoryCard } from "@app/components";

export const ProstorySectionContent: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { data: RoomList = [], isLoading } = useGetRoomsTopListQuery();

	return (
		<section
			ref={containerRef}
			className='flex flex-row justify-between gap-6 max-md:flex-col'>
			{isLoading
				? Array.from({ length: 3 }).map((_, index) => (
						<section
							key={index + 1}
							className='flex-1 overflow-hidden rounded-xl border border-[#C9C4D3] bg-white max-md:w-full'>
							<Skeleton.Image active style={{ width: 595, height: 595 }} />
							<section className='flex flex-col gap-6 p-8'>
								<Skeleton.Input active size='large' style={{ width: "70%" }} />
								<Skeleton active paragraph={{ rows: 2, width: ["100%", "100%"] }} />
							</section>
						</section>
					))
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
