import { Checkbox, ConfigProvider } from "antd";

interface IB2BSelectBox {
	name: string;
	description: string;
}

export const B2BSelectBox: React.FC<IB2BSelectBox> = ({
	name,
	description,
}) => {
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
				<Checkbox />
			</ConfigProvider>
		</section>
	);
};
