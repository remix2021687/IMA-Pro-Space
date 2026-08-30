import { ChangeEvent, FocusEvent } from "react";

interface ITextInputs {
	name: string;
	type: "text" | "tel" | "email";
	placeholder: string;
	onBlur: (e: FocusEvent<HTMLInputElement>) => void;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string | number;
	error_msg: string | undefined;
}

export const TextInputs: React.FC<ITextInputs> = ({
	name,
	type,
	placeholder,
	onBlur,
	onChange,
	value,
	error_msg,
}) => {
	const nameStr = name.replace(/\s/g, "");

	return (
		<label className='flex flex-col gap-3 w-full' htmlFor={`${nameStr}_id`}>
			<span className='text-[#484551] text-[14px] font-bold'>{name}</span>
			<input
				id={`${nameStr}_id`}
				type={type}
				placeholder={placeholder}
				className='px-4 py-3.5 border border-[#C9C4D3] rounded-lg outline-none'
				onBlur={onBlur}
				onChange={onChange}
				value={value ?? ""}
			/>
			{error_msg ? (
				<span className='text-[14px] text-red-700 font-semibold px-2.5'>
					{error_msg}
				</span>
			) : null}
		</label>
	);
};
