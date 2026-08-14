import { ProstoryCard } from "@app/components";

export const ProstorySection: React.FC = () => {
	return (
		<section className='flex flex-col w-full'>
			<section className='flex flex-row justify-between'>
				<section className='flex flex-col gap-3.5'>
					<h4 className='text-[12px] text-[#090030] font-bold'>
						PROSTORY K PRONÁJMU
					</h4>
					<h1 className='text-[#1C1B20] text-[32px] font-semibold'>
						Kabinety & Moduly
					</h1>
				</section>
				<p className='max-w-[384px] text-[16px] text-[#484551]'>
					Standardizované prostory plně vybavené pro estetickou péči a školení.
				</p>
			</section>
			<section className='flex flex-row justify-center'>
				<ProstoryCard />
			</section>
		</section>
	);
};
