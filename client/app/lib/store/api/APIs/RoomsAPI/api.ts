import { api } from "@lib/store/api";

type GetRoomsType = {
	id: string;
	photo: string;
	name: string;
};

type GetRoomsByID = {
	altegio_id: number;
	photo: string;
	name: string;
	description: string;
	service: Array<{ id: string; name: string }>;
};

type createBookingRequest = {
	staff_id: number;
	service_id: number;
	datetime: string;
	client_fullname: string;
	client_phone: string;
	client_email: string;
};

type getAvailableDatesRequest = {
	staff_id: number;
};

type getAvailableDatesResponse = {
	available_dates: string[];
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
		getAvailableDates: builder.query<getAvailableDatesResponse, number>({
			query: (staff_id) => ({
				url: `rooms/available-dates/${staff_id}/`,
				method: "GET",
			}),
		}),
		createBooking: builder.mutation<void, createBookingRequest>({
			query: (body) => ({
				url: "rooms/create/",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const {
	useGetRoomsListQuery,
	useGetRoomByIDQuery,
	useCreateBookingMutation,
	useGetAvailableDatesQuery,
} = RoomsAPI;
