"use client";

import { useEffect } from "react";
import { RoomPageHeader, RoomPageContent } from "./components";
import { useGetRoomByIDQuery } from "@lib/store/api/APIs/RoomsAPI";
import { useAppDispatch } from "@lib/store/hooks";
import {
	addServiceList,
	setRoomID,
} from "@lib/store/slice/RoomPageSlice/RoomPageSlice";

export const RoomPage: React.FC<{ id: string }> = ({ id }) => {
	const { data, isSuccess } = useGetRoomByIDQuery(id);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (isSuccess) {
			dispatch(addServiceList(data.service));
			dispatch(setRoomID(data.altegio_id));
		}
	}, [isSuccess]);

	if (!data) return;

	return (
		<section className='flex flex-col gap-20 w-[80%] max-md:w-full'>
			<RoomPageHeader data={data} />
			<RoomPageContent />
		</section>
	);
};
