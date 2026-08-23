import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
	reducerPath: "API",
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/`,
	}),

	endpoints: (builder) => ({
		// getBookList: builder.query()
	}),
});
