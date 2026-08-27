import { api } from "@lib/store/api";

type GetServiceByIDResponseType = {
	altegio_id: number;
	name: string;
	price: number;
	comment: string;
	content: Array<{ name: string }>;
	equipment: Array<{ name: string }>;
};

type getAvalibleServiceTimeRequest = {
	altegio_id: number;
	date: string;
};

type getAvalibleServiceTimeResponse = {
	time: string;
	datetime: string;
};

export const ServiceAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getServiceByID: builder.query<GetServiceByIDResponseType, string>({
			query: (id) => ({
				url: `services/${id}`,
				method: "GET",
			}),
		}),
		getAvalibleServiceTime: builder.mutation<
			getAvalibleServiceTimeResponse[],
			getAvalibleServiceTimeRequest
		>({
			query: (body) => ({
				url: "service/available-time/",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useGetServiceByIDQuery, useGetAvalibleServiceTimeMutation } =
	ServiceAPI;
