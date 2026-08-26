import { api } from "@lib/store/api";

type GetServiceByIDResponseType = {
	altegio_id: number;
	name: string;
	price: number;
	comment: string;
	content: Array<{ name: string }>;
	equipment: Array<{ name: string }>;
};

export const ServiceAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getServiceByID: builder.query<GetServiceByIDResponseType, string>({
			query: (id) => ({
				url: `services/${id}`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetServiceByIDQuery } = ServiceAPI;
