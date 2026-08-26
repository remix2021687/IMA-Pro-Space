import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IRoomPageSlice {
	service_id: string;
	service_list: Array<{ id: string; name: string }>;
}

const initialState: IRoomPageSlice = {
	service_id: "",
	service_list: [],
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
		addServiceID: (state, action: PayloadAction<string>) => {
			state.service_id = action.payload;
		},
	},
});

export const { addServiceList } = RoomPageSlice.actions;
export default RoomPageSlice.reducer;
