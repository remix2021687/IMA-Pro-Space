import { api } from "@lib/store/api";

type getB2BTypeListResponseType = {
	name: string;
	notes: string;
};

export const B2BAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getB2BTypeList: builder.query<getB2BTypeListResponseType[], void>({
			query: () => ({
				url: "b2b-types/",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetB2BTypeListQuery } = B2BAPI;
