"use client";

import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { setFormData } from "@lib/store/slice/B2BSlice/B2BSlice";
import { toast } from "react-toastify";
import { setSuccess, setLoading } from "@lib/store/slice/B2BSlice/B2BSlice";
import { useCreateB2BRequestMutation } from "@lib/store/api/APIs/B2BAPI";
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
	const t = useTranslations("B2BPageForm");
	const dispatch = useAppDispatch();
	const [RequestB2BSend, { isLoading }] = useCreateB2BRequestMutation();
	const SelectedState = useAppSelector((state) => state.B2BSlice.selectedBox);
	const reqMSG = t("required_text");

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	useEffect(() => {
		dispatch(setLoading(isLoading));
	}, [dispatch, isLoading]);

	const onSumbit = async (data: FormData) => {
		try {
			await RequestB2BSend({
				full_name: data.fullname,
				email: data.email,
				phone: data.mobile,
				date: dayjs(data.date).format("DD.MM.YYYY"),
				b2b_type: SelectedState,
				notes: data.notes,
			}).unwrap();
			dispatch(
				setFormData({
					fullname: data.fullname,
					email: data.email,
					date: dayjs(data.date).format("DD.MM.YYYY"),
				}),
			);
			dispatch(setSuccess(true));
			toast.success(t("send_data"));
		} catch (err: any) {
			if (err.data.email) {
				switch (err.data?.email.code) {
					case "EMAIL_EXISTS":
						toast.error(t("email_exist"));
						break;

					default:
						toast.error(t("error_msg_form"));
				}
			} else {
				toast.error(t("error_msg_form"));
			}
		}
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
				id='b2b-form'
				onSubmit={handleSubmit(onSumbit)}
				className='flex flex-col gap-6 py-6 px-12 w-full overflow-hidden max-sm:px-2'>
				<section className='flex flex-row gap-6 w-full max-sm:flex-col'>
					<label htmlFor='fullName' className='flex flex-col gap-2 w-full'>
						<h4 className='text-[#484551] text-[12px] font-bold'>
							{t("fullname_text")}
						</h4>
						<Controller
							control={control}
							name='fullname'
							rules={{ required: reqMSG }}
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
							{t("email_text")}
						</h4>
						<Controller
							control={control}
							name='email'
							rules={{ required: reqMSG }}
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
				<section className='flex flex-row gap-6 w-full max-sm:flex-col'>
					<label htmlFor='Mobile' className='flex flex-col gap-2 w-full'>
						<h4 className='text-[#484551] text-[12px] font-bold'>
							{t("phone_text")}
						</h4>
						<Controller
							control={control}
							name='mobile'
							rules={{
								required: reqMSG,
								pattern: {
									value: /^\+\d{7,15}$/,
									message: "Neplatný formát. Použijte tvar +420123456789",
								},
							}}
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
							{t("date_text")}
						</h4>
						<Controller
							control={control}
							name='date'
							rules={{ required: reqMSG }}
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
						{t("notes_text")}
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
