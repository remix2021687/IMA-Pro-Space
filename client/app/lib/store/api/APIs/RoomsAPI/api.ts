import { api } from "@lib/store/api";

type GetRoomsType = {
	id: string;
	photo: string;
	name: string;
};

type GetRoomsByID = {
	altegio_id: string;
	photo: string;
	name: string;
	description: string;
	service: Array<{ id: string; name: string }>;
};

export const RoomsAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getRoomsList: builder.query<GetRoomsType[], void>({
			query: () => ({
				url: "rooms/",
				method: "GET",
			}),
			providesTags: ["Rooms"],
		}),
		getRoomByID: builder.query<GetRoomsByID, string>({
			query: (id) => ({
				url: `rooms/${id}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetRoomsListQuery, useGetRoomByIDQuery } = RoomsAPI;
