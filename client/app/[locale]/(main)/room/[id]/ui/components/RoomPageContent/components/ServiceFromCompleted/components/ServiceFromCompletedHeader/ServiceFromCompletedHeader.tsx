"use client";

import { CheckCircleIcon } from "@phosphor-icons/react";
import { useAppSelector } from "@lib/store/hooks";

export const ServiceFromCompletedHeader: React.FC = () => {
	const RoomSendDataEmailState = useAppSelector(
		(state) => state.RoomPageSlice.ServiceRoomComplted.email,
	);

	return (
		<section className='flex flex-col items-center max-sm:gap-4'>
			<CheckCircleIcon size={50} color='#090030' weight='fill' />

			<section className='flex flex-col gap-2 text-center'>
				<h2 className='text-[32px] text-[#090030] font-semibold max-sm:text-[24px]'>
					Rezervace potvrzena
				</h2>
				<p className='text-[16px] text-[#484551] max-md:text-[14px]'>
					Potvrzení jsme odeslali na váš e-mail{" "}
					<span className='text-[#1C1B20] font-medium'>
						{RoomSendDataEmailState}
					</span>
				</p>
			</section>
		</section>
	);
};
