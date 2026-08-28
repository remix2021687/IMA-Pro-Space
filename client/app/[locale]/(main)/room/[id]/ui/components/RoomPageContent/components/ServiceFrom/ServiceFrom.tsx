"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Select, DatePicker, ConfigProvider } from "antd";
import {
	addService,
	addRoomTime,
} from "@lib/store/slice/RoomPageSlice/RoomPageSlice";
import {
	useGetServiceByIDQuery,
	useGetAvalibleServiceTimeMutation,
} from "@lib/store/api/APIs/ServiceAPI";
import { useCreateBookingMutation } from "@lib/store/api/APIs/RoomsAPI";
import { useAppSelector, useAppDispatch } from "@lib/store/hooks";

import dayjs from "dayjs";

type FormData = {
	first_last_name: string;
	mobile: string;
	email: string;
	service: string;
	data: string;
	time: string;
};

export const ServiceFrom: React.FC = () => {
	const dispatch = useAppDispatch();
	const [id, setID] = useState("");
	const [dataReq, setDataReq] = useState("");
	const { data: ServiceByID, isLoading } = useGetServiceByIDQuery(id);
	const ServiceState = useAppSelector((state) => state.RoomPageSlice.service);
	const [createBookingData] = useCreateBookingMutation();
	const [PostData] = useGetAvalibleServiceTimeMutation();
	const ServiceListState = useAppSelector(
		(state) => state.RoomPageSlice.service_list,
	);
	const RoomIDState = useAppSelector((state) => state.RoomPageSlice.roomID);
	const RoomTimeState = useAppSelector(
		(state) => state.RoomPageSlice.roomAvailableTime,
	);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>();

	const onSumbit = async (data: FormData) => {
		await createBookingData({
			staff_id: RoomIDState,
			service_id: ServiceState.altegio_id,
			datetime: data.time,
			client_fullname: data.first_last_name,
			client_phone: data.mobile,
			client_email: data.email,
		});
	};

	const SelectOption = ServiceListState.map((service) => ({
		value: service.id,
		label: service.name,
	}));

	const SelectTimeOption = RoomTimeState.map((time) => ({
		value: time.datetime,
		label: time.time,
	}));

	useEffect(() => {
		if (ServiceByID) {
			dispatch(
				addService({
					altegio_id: ServiceByID.altegio_id,
					name: ServiceByID.name,
					price: ServiceByID.price,
					content: ServiceByID.content,
					equipment: ServiceByID.equipment,
				}),
			);

			if (dataReq !== "") {
				PostData({
					staff_id: RoomIDState,
					date: dataReq,
				}).then((res) => {
					if (res.data) {
						dispatch(addRoomTime(res.data));
					}
				});
			}
		}
	}, [ServiceByID, dataReq]);

	return (
		<form
			onSubmit={handleSubmit(onSumbit)}
			className='flex flex-col gap-8 w-173 border border-[#C9C4D3] p-12 rounded-xl h-fit sticky left-full top-25'>
			<section className='flex flex-col gap-4'>
				<h2 className='text-[#090030] text-[24px] font-semibold'>
					Rezervace termínu
				</h2>
				<hr className='text-[#C9C4D3]' />
			</section>
			<section className='flex flex-col gap-6'>
				<section className='flex flex-row gap-6'>
					<label className='flex flex-col gap-3 w-1/2' htmlFor='firstLastName'>
						<span className='text-[#484551] text-[14px] font-bold'>
							JMÉNO A PŘÍJMENÍ
						</span>
						<input
							id='firstLastName'
							type='text'
							placeholder='Jan Novák'
							className='px-4 py-3.5 border border-[#C9C4D3] rounded-lg outline-none'
							{...register("first_last_name", {
								required: "Tato položka je povinná.",
							})}
						/>
						<span className='text-[14px] text-red-700 font-semibold px-2.5'>
							{errors.first_last_name?.message}
						</span>
					</label>
					<label className='flex flex-col gap-3 w-1/2' htmlFor='MobileNum'>
						<span className='text-[#484551] text-[14px] font-bold'>
							TELEFON
						</span>
						<input
							id='MobileNum'
							type='tel'
							placeholder='Jan Novák'
							className='px-4 py-3.5 border border-[#C9C4D3] rounded-lg outline-none'
							{...register("mobile", {
								required: "Tato položka je povinná.",
							})}
						/>
						<span className='text-[14px] text-red-700 font-semibold px-2.5'>
							{errors.mobile?.message}
						</span>
					</label>
				</section>
				<label className='flex flex-col gap-3' htmlFor='Email'>
					<span className='text-[#484551] text-[14px] font-bold'>E-MAIL</span>
					<input
						id='Email'
						type='email'
						placeholder='jan@email.cz'
						className='px-4 py-3.5 border border-[#C9C4D3] rounded-lg outline-none'
						{...register("email", {
							required: "Tato položka je povinná.",
						})}
					/>
					<span className='text-[14px] text-red-700 font-semibold px-2.5'>
						{errors.email?.message}
					</span>
				</label>
				<ConfigProvider
					theme={{
						components: {
							Select: {
								activeBorderColor: "#C9C4D3",
								activeOutlineColor: "transparent",
								hoverBorderColor: "#C9C4D3",
							},
							DatePicker: {
								activeBorderColor: "#C9C4D3",
								activeShadow: "transparent",
								hoverBorderColor: "#C9C4D3",
							},
						},
					}}>
					<label className='flex flex-col gap-3' htmlFor='ServiceSelect'>
						<span className='text-[#484551] text-[14px] font-bold'>SLUŽBY</span>
						<Controller
							control={control}
							name='service'
							rules={{
								required: "Tato položka je povinná.",
							}}
							render={({ field: { onBlur, onChange, value } }) => (
								<Select
									className='px-4! py-3!'
									id='ServiceSelect'
									placeholder='Vyberte služby...'
									onBlur={onBlur}
									onChange={(data) => {
										onChange(data);
										setID(data);
									}}
									value={value}
									options={SelectOption}
								/>
							)}
						/>
						<span className='text-[14px] text-red-700 font-semibold px-2.5'>
							{errors.service?.message}
						</span>
					</label>
					<hr className='text-[#C9C4D3]' />
					<section className='flex flex-row gap-6'>
						<label className='flex flex-col gap-3 w-1/2' htmlFor='TimeSelect'>
							<span className='text-[#484551] text-[14px] font-bold'>
								DATUM
							</span>
							<Controller
								control={control}
								name='data'
								rules={{
									required: "Tato položka je povinná.",
								}}
								render={({ field: { onBlur, onChange, value } }) => (
									<DatePicker
										className='px-4! py-3!'
										id='TimeSelect'
										format={"DD.MM.YYYY"}
										placeholder='mm.dd.yyyy'
										onBlur={onBlur}
										disabledDate={(current) => {
											return current && current < dayjs().startOf("day");
										}}
										onChange={(data) => {
											onChange(data);
											setDataReq(dayjs(data).format("YYYY-MM-DD"));
										}}
										value={value}
									/>
								)}
							/>
							<span className='text-[14px] text-red-700 font-semibold px-2.5'>
								{errors.data?.message}
							</span>
						</label>
						<label className='flex flex-col gap-3 w-1/2' htmlFor='TimeSelect'>
							<span className='text-[#484551] text-[14px] font-bold'>ČAS</span>
							<Controller
								control={control}
								rules={{
									required: "Tato položka je povinná.",
								}}
								name='time'
								render={({ field: { onBlur, onChange, value } }) => (
									<Select
										className='px-4! py-3!'
										id='TimeSelect'
										placeholder='Vyberte čas...'
										onBlur={onBlur}
										onChange={onChange}
										value={value}
										options={SelectTimeOption}
									/>
								)}
							/>
							<span className='text-[14px] text-red-700 font-semibold px-2.5'>
								{errors.time?.message}
							</span>
						</label>
					</section>
				</ConfigProvider>
				<hr className='text-[#C9C4D3]' />
				<section className='flex flex-row items-center justify-between'>
					<h2 className='text-[#090030] text-[24px] font-semibold'>
						Cena: {ServiceState?.price?.toLocaleString("cs-CZ") ?? "-"} Kč
					</h2>
					<button className='px-8 py-4 bg-[#21026E] text-white text-[14px] rounded-lg font-bold cursor-pointer'>
						REZERVOVAT
					</button>
				</section>
			</section>
		</form>
	);
};
