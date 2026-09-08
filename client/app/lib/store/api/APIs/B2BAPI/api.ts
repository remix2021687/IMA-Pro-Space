import { api } from "@lib/store/api";

type getB2BTypeListResponseType = {
	name: string;
	notes: string;
};

type getB2BReadyListResponseType = {
	name: string;
	b2b_type: {
		name: string;
	}[];
};

export const B2BAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getB2BTypeList: builder.query<getB2BTypeListResponseType[], void>({
			query: () => ({
				url: "b2b-types/",
				method: "GET",
			}),
			providesTags: ["B2B"],
		}),

		getB2BReadyList: builder.query<getB2BReadyListResponseType[], void>({
			query: () => ({
				url: "b2b-ready-selected/",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetB2BTypeListQuery, useGetB2BReadyListQuery } = B2BAPI;
