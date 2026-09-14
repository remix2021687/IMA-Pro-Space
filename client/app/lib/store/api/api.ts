import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "API",
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/`,
	}),
	tagTypes: ["Rooms", "Service", "B2B"],

	endpoints: () => ({}),
});
