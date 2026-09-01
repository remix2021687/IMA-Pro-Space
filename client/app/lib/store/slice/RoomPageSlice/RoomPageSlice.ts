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
	roomID: number;
	roomAvailableTime: Array<{ time: string; datetime: string }>;
	ServiceRoomComplted: {
		fullname: string;
		date: string;
		space: string;
		time: string;
		price: number;
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
	roomID: 0,
	roomAvailableTime: [],
	ServiceRoomComplted: {
		fullname: "",
		date: "",
		space: "",
		time: "",
		price: 0,
	},
};

const RoomPageSlice = createSlice({
	name: "Room Page Slice",
	initialState,
	reducers: {
		setRoomID: (state, action: PayloadAction<number>) => {
			state.roomID = action.payload;
		},

		addRoomTime: (
			state,
			action: PayloadAction<IRoomPageSlice["roomAvailableTime"]>,
		) => {
			state.roomAvailableTime = action.payload;
		},

		addServiceList: (
			state,
			action: PayloadAction<IRoomPageSlice["service_list"]>,
		) => {
			state.service_list = action.payload;
		},

		addService: (state, action: PayloadAction<IRoomPageSlice["service"]>) => {
			state.service = action.payload;
		},
		addServiceRoomComplted: (
			state,
			action: PayloadAction<IRoomPageSlice["ServiceRoomComplted"]>,
		) => {
			state.ServiceRoomComplted = action.payload;
		},
	},
});

export const {
	addServiceList,
	addService,
	setRoomID,
	addRoomTime,
	addServiceRoomComplted,
} = RoomPageSlice.actions;
export default RoomPageSlice.reducer;
