import { configureStore } from "@reduxjs/toolkit";
import RoomPageSlice from "./slice/RoomPageSlice/RoomPageSlice";
import { api } from "@lib/store/api";
import OpenMenuSlice from "./slice/OpenMenuSlice";

export const store = () => {
	return configureStore({
		reducer: {
			OpenMenuSlice: OpenMenuSlice,
			RoomPageSlice: RoomPageSlice,
			[api.reducerPath]: api.reducer,
		},
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware().concat(api.middleware);
		},
	});
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
