import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IB2BSlice {
	selectedBox: string[];
	formSend: {
		fullname: string;
		email: string;
		mobile: string;
		date: string;
		notes: string;
	};
}

const initialState: IB2BSlice = {
	selectedBox: [],
	formSend: {
		fullname: "",
		email: "",
		mobile: "",
		date: "",
		notes: "",
	},
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

		setFormData: (state, action: PayloadAction<IB2BSlice["formSend"]>) => {
			state.formSend = action.payload;
		},
	},
});

export const { setB2BSelectedBox, setReadySelected, setFormData } =
	B2BSlice.actions;
export default B2BSlice.reducer;
