import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IB2BSlice {
	selectedBox: string[];
	formVisible: boolean;
}

const initialState: IB2BSlice = {
	selectedBox: [],
	formVisible: false,
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

		setReadySelected: (state, action: PayloadAction<string[]>) => {
			state.selectedBox = action.payload;
		},

		setVisibleForm: (state, action: PayloadAction<boolean>) => {
			state.formVisible = action.payload;
		},
	},
});

export const { setB2BSelectedBox, setReadySelected, setVisibleForm } =
	B2BSlice.actions;
export default B2BSlice.reducer;
