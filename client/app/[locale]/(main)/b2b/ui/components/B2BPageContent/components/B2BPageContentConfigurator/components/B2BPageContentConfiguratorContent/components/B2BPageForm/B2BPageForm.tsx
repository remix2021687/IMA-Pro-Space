"use client";

import { useRef } from "react";
import { setFormData } from "@lib/store/slice/B2BSlice/B2BSlice";
import { Input, DatePicker, ConfigProvider } from "antd";
import { useForm, Controller } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import { useAppSelector, useAppDispatch } from "@lib/store/hooks";
import dayjs, { Dayjs } from "dayjs";
import gsap from "gsap";

const { TextArea } = Input;

type FormData = {
	fullname: string;
	email: string;
	mobile: string;
	date: string;
	notes: string;
};

export const B2BPageForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onChange = (data: FormData) => {
		console.log(data);
		dispatch(
			setFormData({
				fullname: data.fullname,
				email: data.email,
				mobile: data.mobile,
				date: dayjs(data.date).format("DD.MM.YYYY"),
				notes: data.notes,
			}),
		);
	};

	return (
		<ConfigProvider
			theme={{
				components: {
					Input: {
						activeShadow: "#20026E",
						activeBorderColor: "#20026E",
						hoverBorderColor: "#20026E",
					},
					DatePicker: {
						activeShadow: "#20026E",
						activeBorderColor: "#20026E",
						hoverBorderColor: "#20026E",
					},
				},
			}}>
			<form
				onChange={handleSubmit(onChange)}
				className='flex flex-col gap-6 py-6 px-12 w-full overflow-hidden'>
				<section className='flex flex-row gap-6 w-full'>
					<label htmlFor='fullName' className='flex flex-col gap-2 w-full'>
						<h4 className='text-[#484551] text-[12px] font-bold'>
							CELÉ JMÉNO*
						</h4>
						<Controller
							control={control}
							name='fullname'
							rules={{ required: "Tato položka je povinná." }}
							render={({ field: { onChange, onBlur, value } }) => (
								<Input
									id='fullName'
									className='px-6! py-4!'
									placeholder='Jan Novák'
									onChange={onChange}
									onBlur={onBlur}
									value={value}
								/>
							)}
						/>
						<span className='text-[14px] text-red-700 font-semibold px-2.5'>
							{errors.fullname?.message}
						</span>
					</label>
					<label htmlFor='Email' className='flex flex-col gap-2 w-full'>
						<h4 className='text-[#484551] text-[12px] font-bold'>
							E-MAILOVÁ ADRESA*
						</h4>
						<Controller
							control={control}
							name='email'
							rules={{ required: "Tato položka je povinná." }}
							render={({ field: { onChange, onBlur, value } }) => (
								<Input
									id='Email'
									type={"email"}
									className='px-6! py-4!'
									placeholder='jan.novak@email.cz'
									onChange={onChange}
									onBlur={onBlur}
									value={value}
								/>
							)}
						/>
						<span className='text-[14px] text-red-700 font-semibold px-2.5'>
							{errors.email?.message}
						</span>
					</label>
				</section>
				<section className='flex flex-row gap-6 w-full'>
					<label htmlFor='Mobile' className='flex flex-col gap-2 w-full'>
						<h4 className='text-[#484551] text-[12px] font-bold'>
							TELEFONNÍ ČÍSLO*
						</h4>
						<Controller
							control={control}
							name='mobile'
							rules={{ required: "Tato položka je povinná." }}
							render={({ field: { onBlur, onChange, value } }) => (
								<Input
									id='Mobile'
									type={"tel"}
									className='px-6! py-4!'
									placeholder='+999 000 000 000'
									onBlur={onBlur}
									onChange={onChange}
									value={value}
								/>
							)}
						/>
						<span className='text-[14px] text-red-700 font-semibold px-2.5'>
							{errors.mobile?.message}
						</span>
					</label>
					<label htmlFor='Date' className='flex flex-col gap-2 w-full'>
						<h4 className='text-[#484551] text-[12px] font-bold'>
							PREFEROVANÝ TERMÍN*
						</h4>
						<Controller
							control={control}
							name='date'
							rules={{ required: "Tato položka je povinná." }}
							render={({ field: { onBlur, onChange, value } }) => (
								<DatePicker
									id='Date'
									className='px-6! py-4!'
									placeholder='dd.mm.yyyy'
									format={"DD.MM.YYYY"}
									onBlur={onBlur}
									onChange={onChange}
									disabledDate={(current: Dayjs) => {
										return current && current < dayjs().startOf("day");
									}}
									value={value}
								/>
							)}
						/>
						<span className='text-[14px] text-red-700 font-semibold px-2.5'>
							{errors.date?.message}
						</span>
					</label>
				</section>
				<label htmlFor='TextArea' className='flex flex-col gap-2 w-full'>
					<h4 className='text-[#484551] text-[12px] font-bold uppercase'>
						ZPRÁVA / POZNÁMKA (nepovinná)
					</h4>
					<Controller
						control={control}
						name='notes'
						render={({ field: { onBlur, onChange, value } }) => (
							<TextArea
								id='TextArea'
								className='px-6! py-4!'
								showCount
								maxLength={3000}
								style={{ height: 110, resize: "none" }}
								onBlur={onBlur}
								onChange={onChange}
								value={value}
							/>
						)}
					/>
				</label>
			</form>
		</ConfigProvider>
	);
};
