interface IStepsBox {
	index: number;
	title: string;
	text: string;
}

export const StepsBox: React.FC<IStepsBox> = ({ index, title, text }) => {
	return (
		<section className='flex flex-col items-center justify-center px-8 py-12 border border-[#C9C4D3] rounded-xl relative w-full'>
			<span className='flex flex-col items-center justify-center w-12 h-12 bg-[#EBE6EE] border border-[#FDF8FF] rounded-full text-[#1C1B20] text-[24px] font-semibold absolute -top-6'>
				0{index}
			</span>
			<section className='flex flex-col gap-2 text-center'>
				<h2 className='text-[#1C1B20] text-[18px] font-medium'>{title}</h2>
				<p className='text-[#484551] text-[16px] max-w-36'>{text}</p>
			</section>
		</section>
	);
};
