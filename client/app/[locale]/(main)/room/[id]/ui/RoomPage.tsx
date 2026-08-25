"use client";

import { useEffect } from "react";
import { RoomPageHeader, RoomPageContent } from "./components";
import { useGetRoomByIDQuery } from "@lib/store/api/APIs/RoomsAPI";
import { useAppDispatch } from "@lib/store/hooks";
import { addServiceList } from "@lib/store/slice/RoomPageSlice/RoomPageSlice";

export const RoomPage: React.FC<{ id: string }> = ({ id }) => {
	const { data, isLoading } = useGetRoomByIDQuery(id);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (data) {
			dispatch(addServiceList(data.service));
		}
	}, [data]);

	if (!data) return;

	return (
		<section className='flex flex-col gap-20 w-[80%]'>
			<RoomPageHeader data={data} />
			<RoomPageContent />
		</section>
	);
};
