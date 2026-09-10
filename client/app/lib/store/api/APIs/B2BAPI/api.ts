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

type createB2BRequestType = {
	full_name: string;
	email: string;
	phone: string;
	date: string;
	b2b_type: string[];
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
			providesTags: ["B2B"],
		}),

		createB2BRequest: builder.mutation<void, createB2BRequestType>({
			query: (body) => ({
				url: "b2b/",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const {
	useGetB2BTypeListQuery,
	useGetB2BReadyListQuery,
	useCreateB2BRequestMutation,
} = B2BAPI;
