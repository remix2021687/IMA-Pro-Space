import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

export const api = createApi({
	reducerPath: "API",
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/`,
		prepareHeaders(headers, { getState }) {
			const locale = (getState() as RootState).i18nSlice.locale;

			console.log(locale);

			if (locale) {
				headers.set("Accept-Language", locale);
			}

			return headers;
		},
	}),
	tagTypes: ["Rooms", "Service", "B2B"],

	endpoints: () => ({}),
});
