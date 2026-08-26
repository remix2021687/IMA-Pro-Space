"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Select, DatePicker, ConfigProvider } from "antd";
import { addService } from "@lib/store/slice/RoomPageSlice/RoomPageSlice";
import { useGetServiceByIDQuery } from "@lib/store/api/APIs/ServiceAPI";
import { useAppSelector, useAppDispatch } from "@lib/store/hooks";

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
	const { data, isLoading } = useGetServiceByIDQuery(id);
	const ServiceState = useAppSelector((state) => state.RoomPageSlice.service);
	const ServiceListState = useAppSelector(
		(state) => state.RoomPageSlice.service_list,
	);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>();

	const onSumbit = (data: FormData) => {
		console.log(data);
		console.log(errors);
	};

	const SelectOption = ServiceListState.map((service) => ({
		value: service.id,
		label: service.name,
	}));

	useEffect(() => {
		if (data) {
			dispatch(
				addService({
					altegio_id: data.altegio_id,
					name: data.name,
					price: data.price,
					content: data.content,
					equipment: data.equipment,
				}),
			);
		}
	}, [data]);

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
								required: "Is req",
							})}
						/>
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
							{...register("mobile")}
						/>
					</label>
				</section>
				<label className='flex flex-col gap-3' htmlFor='Email'>
					<span className='text-[#484551] text-[14px] font-bold'>E-MAIL</span>
					<input
						id='Email'
						type='email'
						placeholder='jan@email.cz'
						className='px-4 py-3.5 border border-[#C9C4D3] rounded-lg outline-none'
						{...register("email")}
					/>
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
								render={({ field: { onBlur, onChange, value } }) => (
									<DatePicker
										className='px-4! py-3!'
										id='TimeSelect'
										format={"DD.MM.YYYY"}
										placeholder='mm.dd.yyyy'
										onBlur={onBlur}
										onChange={onChange}
										value={value}
									/>
								)}
							/>
						</label>
						<label className='flex flex-col gap-3 w-1/2' htmlFor='TimeSelect'>
							<span className='text-[#484551] text-[14px] font-bold'>ČAS</span>
							<Controller
								control={control}
								name='time'
								render={({ field: { onBlur, onChange, value } }) => (
									<Select
										className='px-4! py-3!'
										id='TimeSelect'
										placeholder='Vyberte čas...'
										onBlur={onBlur}
										onChange={onChange}
										value={value}
									/>
								)}
							/>
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
