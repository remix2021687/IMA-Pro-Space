import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IB2BSlice {
	selectedBox: string[];
}

const initialState: IB2BSlice = {
	selectedBox: [],
};

const B2BSlice = createSlice({
	name: "B2B Slice",
	initialState,
	reducers: {
		setB2BSelectedBox: (
			state,
			action: PayloadAction<{ name: string; isSelected: boolean }>,
		) => {
			const { name, isSelected } = action.payload;

			if (isSelected) {
				if (!state.selectedBox.includes(name)) {
					state.selectedBox.push(name);
				}
			} else {
				state.selectedBox = state.selectedBox.filter(
					(filterName) => filterName !== name,
				);
			}
		},
	},
});

export const { setB2BSelectedBox } = B2BSlice.actions;
export default B2BSlice.reducer;
