"use client";

import { CheckCircleIcon } from "@phosphor-icons/react";
import { ServiceFromCompletedContent } from "./components";

export const ServiceFromCompleted: React.FC = () => {
	return (
		<section className='flex flex-col justify-center p-12 border border-[#C9C4D3] sticky left-full top-25 w-1/2 gap-8 rounded-xl'>
			<section className='flex flex-col items-center'>
				<CheckCircleIcon size={50} color='#090030' weight='fill' />

				<section className='flex flex-col gap-2 text-center'>
					<h2 className='text-[32px] text-[#090030] font-semibold'>
						Rezervace potvrzena
					</h2>
					<p className='text-[16px] text-[#484551]'>
						Potvrzení jsme odeslali na váš e-mail{" "}
						<span className='text-[#1C1B20] font-medium'>jan@email.cz.</span>
					</p>
				</section>
			</section>
			<ServiceFromCompletedContent />
		</section>
	);
};
