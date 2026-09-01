interface TextBox {
	name?: string;
	title?: string;
}

export const TextBox: React.FC<TextBox> = ({ name, title }) => {
	return (
		<section className='flex flex-col gap-2'>
			<h4 className='text-[#484551] text-[12px] font-bold'>{name}</h4>
			<h2 className='text-[#1C1B20] text-[16px] font-semibold'>{title}</h2>
		</section>
	);
};
