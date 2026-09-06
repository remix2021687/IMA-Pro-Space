export const B2BPageContentConfiguratorContentFooter: React.FC = () => {
	return (
		<section className='flex flex-col gap-8 p-12'>
			<hr className='text-[#C9C4D3]' />
			<section className='flex flex-row  items-end justify-between w-full'>
				<h2 className='text-[18px] text-[#484551] font-medium'>
					Vybráno:{" "}
					<span className='text-[#20026E] font-bold'>Sál + Přenos</span>
				</h2>
				<button className='px-12 py-3.5 bg-[#20026E] rounded-full text-[16px] text-white font-bold cursor-pointer'>
					Odeslat poptávku
				</button>
			</section>
		</section>
	);
};
