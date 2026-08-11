import { createSlice } from "@reduxjs/toolkit";

interface IOpenMenuSlice {
	isOpen: boolean;
}

const initialState: IOpenMenuSlice = {
	isOpen: false,
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
	},
});

export const { Open, Close } = OpenMenuSlice.actions;
export default OpenMenuSlice.reducer;
