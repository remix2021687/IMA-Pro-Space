export const RoomListPageHeader: React.FC = () => {
	return (
		<section className='flex flex-col gap-7.5'>
			<section className='flex flex-col gap-6'>
				<h2 className='text-[#090030] text-[48px] font-bold max-md:text-[38px]'>
					Naše Prostory
				</h2>
				<p className='text-[18px] text-[#484551] font-medium max-w-147 max-md:text-[16px]'>
					Vyberte si ideální prostor pro vaši praxi, školení nebo event v
					moderním prostředí v srdci města.
				</p>
			</section>
			<hr className='text-[#C9C4D3]' />
		</section>
	);
};
