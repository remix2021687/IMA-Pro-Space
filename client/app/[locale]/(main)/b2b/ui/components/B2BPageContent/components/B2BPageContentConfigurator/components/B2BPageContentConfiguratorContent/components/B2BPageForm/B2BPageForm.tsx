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
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	return (
		<form className='flex flex-col gap-6 py-6 px-12 w-full overflow-hidden'>
			<section className='flex flex-row gap-6 w-full'>
				<label className='flex flex-col gap-2 w-full'>
					<h4 className='text-[#484551] text-[12px] font-bold'>CELÉ JMÉNO</h4>
					<Input className='px-6! py-4!' placeholder='Jan Novák' />
				</label>
				<label className='flex flex-col gap-2 w-full'>
					<h4 className='text-[#484551] text-[12px] font-bold'>
						E-MAILOVÁ ADRESA
					</h4>
					<Input
						type={"email"}
						className='px-6! py-4!'
						placeholder='jan.novak@email.cz'
					/>
				</label>
			</section>
			<section className='flex flex-row gap-6 w-full'>
				<label className='flex flex-col gap-2 w-full'>
					<h4 className='text-[#484551] text-[12px] font-bold'>
						TELEFONNÍ ČÍSLO
					</h4>
					<Input className='px-6! py-4!' placeholder='+999 000 000 000' />
				</label>
				<label className='flex flex-col gap-2 w-full'>
					<h4 className='text-[#484551] text-[12px] font-bold'>CELÉ JMÉNO</h4>
					<DatePicker className='px-6! py-4!' placeholder='dd.mm.yyyy' />
				</label>
			</section>
			<label className='flex flex-col gap-2 w-full'>
				<h4 className='text-[#484551] text-[12px] font-bold'>
					ZPRÁVA / POZNÁMKA
				</h4>
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
