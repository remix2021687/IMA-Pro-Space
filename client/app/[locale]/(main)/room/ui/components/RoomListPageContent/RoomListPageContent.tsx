"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Skeleton } from "antd";
import { FilterButton } from "./components";
import { useGetRoomsListQuery } from "@lib/store/api/APIs/RoomsAPI";
import { ProstoryCard } from "@app/components";
import { HallBox } from "./components";

export const RoomListPageContent: React.FC = () => {
	const t = useTranslations("RoomListPageContent");
	const { data: RoomList, isLoading } = useGetRoomsListQuery();
	const [isActiveFilter, setIsActiveFilter] = useState(t("step_1"));

	const ButtonList: Array<{ name: string; onClick: () => void }> = [
		{
			name: t("step_1"),
			onClick: () => {
				setIsActiveFilter(t("step_1"));
			},
		},
		{
			name: t("step_2"),
			onClick: () => {
				setIsActiveFilter(t("step_2"));
			},
		},
		{
			name: t("step_3"),
			onClick: () => {
				setIsActiveFilter(t("step_3"));
			},
		},
		// {
		// 	name: "VENKOVNÍ PROSTORY",
		// 	onClick: () => {
		// 		setIsActiveFilter("VENKOVNÍ PROSTORY");
		// 	},
		// },
	];

	const hallShow =
		isActiveFilter === t("step_1") || isActiveFilter === t("step_3");

	const KabinetShow =
		isActiveFilter === t("step_1") || isActiveFilter === t("step_2");

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
			{KabinetShow && (
				<section className='flex flex-row gap-6 justify-between flex-wrap'>
					{isLoading ? (
						<section className='flex flex-row items-center justify-center w-full h-3/5 gap-5'>
							<Skeleton active />
							<Skeleton active />
							<Skeleton active />
						</section>
					) : (
						RoomList?.map((data, index) => (
							<section key={index + 1} className='w-[30%] max-md:w-full'>
								<ProstoryCard
									id={data.id}
									index={index}
									title={data.name}
									photo={data.photo}
								/>
							</section>
						))
					)}
				</section>
			)}
			{hallShow && (
				<>
					<hr className='text-[#C9C4D3]' />
					{isLoading ? (
						<Skeleton active />
					) : (
						<section className='flex flex-row items-center justify-center'>
							<HallBox />
						</section>
					)}
				</>
			)}
		</section>
	);
};
