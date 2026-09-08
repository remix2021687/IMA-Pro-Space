"use client";

import { useRef } from "react";
import { Input, DatePicker } from "antd";
import { useForm } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useAppSelector } from "@lib/store/hooks";

const { TextArea } = Input;

type FormData = {
	fullname: string;
	email: string;
	number: string;
	date: string;
	notes: string;
};

export const B2BPageForm: React.FC = () => {
	const FormVisibleState = useAppSelector(
		(state) => state.B2BSlice.formVisible,
	);
	const formRef = useRef<HTMLFormElement>(null);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	useGSAP(
		() => {
			gsap.to(formRef.current, {
				height: FormVisibleState ? "100%" : "0%",
				duration: 1,
				ease: "power3.out",
			});
		},
		{ scope: formRef, dependencies: [FormVisibleState] },
	);

	return (
		<form
			ref={formRef}
			className='flex flex-col gap-6 py-6 px-12 w-full overflow-hidden'>
			<section className='flex flex-row gap-6 w-full'>
				<label className='flex flex-col gap-2 w-full'>
					<h4 className='text-[#484551] text-[12px] font-bold'>CELÉ JMÉNO</h4>
					<Input className='px-6! py-4!' placeholder='Jan Novák' />
				</label>
				<label className='flex flex-col gap-2 w-full'>
					<h4 className='text-[#484551] text-[12px] font-bold'>CELÉ JMÉNO</h4>
					<Input className='px-6! py-4!' placeholder='' />
				</label>
			</section>
			<section className='flex flex-row gap-6 w-full'>
				<label className='flex flex-col gap-2 w-full'>
					<h4 className='text-[#484551] text-[12px] font-bold'>CELÉ JMÉNO</h4>
					<Input className='px-6! py-4!' />
				</label>
				<label className='flex flex-col gap-2 w-full'>
					<h4 className='text-[#484551] text-[12px] font-bold'>CELÉ JMÉNO</h4>
					<DatePicker className='px-6! py-4!' />
				</label>
			</section>
			<label className='flex flex-col gap-2 w-full'>
				<h4 className='text-[#484551] text-[12px] font-bold'>CELÉ JMÉNO</h4>
				<TextArea
					className='px-6! py-4!'
					showCount
					maxLength={3000}
					style={{ height: 110, resize: "none" }}
				/>
			</label>
		</form>
	);
};
