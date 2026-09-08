import { useAppSelector } from "@lib/store/hooks";
import { Checkbox, CheckboxChangeEvent, ConfigProvider } from "antd";

interface IB2BSelectBox {
	name: string;
	description: string;
	retunData: (name: string, is_selected: boolean) => void;
}

export const B2BSelectBox: React.FC<IB2BSelectBox> = ({
	name,
	description,
	retunData,
}) => {
	const SelectedState = useAppSelector((state) =>
		state.B2BSlice.selectedBox.includes(name),
	);
	const onChange = (e: CheckboxChangeEvent) => {
		const isChecked = e.target.checked;

		retunData(name, isChecked);
	};

	return (
		<section className='flex flex-row justify-between items-center w-full px-12 py-6'>
			<section className='flex flex-col gap-1'>
				<h2 className='text-[24px] text-[#1C1B21] font-semibold'>{name}</h2>
				<span className='text-[16px] text-[#797583]'>{description}</span>
			</section>
			<ConfigProvider
				theme={{
					components: {
						Checkbox: {
							colorBorder: "#20026E",
							colorPrimary: "#20026E",
							colorPrimaryHover: "#20026E",
							controlInteractiveSize: 26,
						},
					},
				}}>
				<Checkbox onChange={onChange} checked={SelectedState} />
			</ConfigProvider>
		</section>
	);
};
