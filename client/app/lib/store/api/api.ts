import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useAppSelector } from "@lib/store/hooks";
import { RootState } from "../store";

export const api = createApi({
	reducerPath: "API",
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/`,
		prepareHeaders(headers) {
			const locale = document.cookie.match(/NEXT_LOCALE=([^;]+)/)?.[1];

			if (locale) {
				headers.set("Accept-Language", locale);
			}

			return headers;
		},
	}),
	tagTypes: ["Rooms", "Service", "B2B"],

	endpoints: () => ({}),
});
