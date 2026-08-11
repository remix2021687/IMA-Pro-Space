import { configureStore } from "@reduxjs/toolkit";
import OpenMenuSlice from "./slice/OpenMenuSlice";

export const store = () => {
	return configureStore({
		reducer: {
			OpenMenuSlice: OpenMenuSlice,
		},
	});
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
