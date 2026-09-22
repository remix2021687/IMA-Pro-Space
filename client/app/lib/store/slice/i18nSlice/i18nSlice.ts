import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	locale: "cz",
};

const i18nSlice = createSlice({
	name: "i18nSlice",
	initialState,
	reducers: {
		setLocale: (state, action: PayloadAction<string>) => {
			state.locale = action.payload;
		},
	},
});

export const { setLocale } = i18nSlice.actions;
export default i18nSlice.reducer;
