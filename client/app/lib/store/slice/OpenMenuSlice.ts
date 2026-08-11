import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOpenMenuSlice {
	isOpen: boolean;
	isModelDispled: boolean;
}

const initialState: IOpenMenuSlice = {
	isOpen: false,
	isModelDispled: false,
};

const OpenMenuSlice = createSlice({
	name: "Open Menu Slice",
	initialState,
	reducers: {
		Open: (state) => {
			state.isOpen = true;
		},

		Close: (state) => {
			state.isOpen = false;
		},

		ChangeModelDispled: (state, action: PayloadAction<boolean>) => {
			state.isModelDispled = action.payload;
		},
	},
});

export const { Open, Close, ChangeModelDispled } = OpenMenuSlice.actions;
export default OpenMenuSlice.reducer;
