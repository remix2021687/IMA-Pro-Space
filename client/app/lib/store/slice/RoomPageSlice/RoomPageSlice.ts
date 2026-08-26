import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IRoomPageSlice {
	service_list: Array<{ id: string; name: string }>;
	service: {
		altegio_id: number;
		name: string;
		price: number;
		content: Array<{ name: string }>;
		equipment: Array<{ name: string }>;
	};
}

const initialState: IRoomPageSlice = {
	service_list: [],
	service: {
		altegio_id: 0,
		name: "",
		price: 0,
		content: [],
		equipment: [],
	},
};

const RoomPageSlice = createSlice({
	name: "Room Page Slice",
	initialState,
	reducers: {
		addServiceList: (
			state,
			action: PayloadAction<IRoomPageSlice["service_list"]>,
		) => {
			state.service_list = action.payload;
		},
		addService: (state, action: PayloadAction<IRoomPageSlice["service"]>) => {
			state.service = action.payload;
		},
	},
});

export const { addServiceList, addService } = RoomPageSlice.actions;
export default RoomPageSlice.reducer;
