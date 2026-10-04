import { useAppSelector } from "@lib/store/hooks";

export const ServiceFromCompletedContentFooter: React.FC = () => {
	const ServiceRoomCompltedStatePrice = useAppSelector(
		(state) => state.RoomPageSlice.ServiceRoomComplted.price,
	);

	return (
		<section className='flex flex-col w-full gap-6'>
			<hr className='text-[#C9C4D3]' />
			<section className='flex flex-row w-full justify-between'>
				<h4 className='text-[18px] text-[#090030] font-[750] max-md:text-[16px]'>
					Celková cena
				</h4>
				<h2 className='text-[24px] text-[#090030] font-[750] max-md:text-[20px]'>
					{ServiceRoomCompltedStatePrice.toLocaleString("cs-CZ")} Kč
				</h2>
			</section>
		</section>
	);
};
