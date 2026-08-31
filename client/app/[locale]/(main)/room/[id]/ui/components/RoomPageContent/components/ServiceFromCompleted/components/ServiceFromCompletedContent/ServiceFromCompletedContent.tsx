import { TextBox } from "./components";

export const ServiceFromCompletedContent: React.FC = () => {
	return (
		<section className='flex flex-col gap-8 p-8 border border-[#C9C4D3] rounded-xl'>
			<section className='flex flex-col gap-2.5 w-full'>
				<h4 className='text-[12px] text-[#484551] font-bold'>
					SHRNUTÍ REZERVACE
				</h4>
				<hr className='w-full text-[#C9C4D3]' />
			</section>
			<section className='flex flex-row gap-6 w-full justify-between'>
				<section className='flex flex-col w-full items-start gap-8'>
					<TextBox name='JMÉNO' title='Jan Novák' />

					<TextBox name='PROSTOR' title='Kabinet A1' />
				</section>
				<section className='flex flex-col w-full justify-between'>
					<TextBox name='DATUM' title='[DOPLNIT]' />

					<TextBox name='ČAS' title='08:00' />
				</section>
			</section>
			<section className='flex flex-col w-full gap-6'>
				<hr className='text-[#C9C4D3]' />
				<section className='flex flex-row w-full justify-between'>
					<h4 className='text-[18px] text-[#090030] font-[750]'>
						Celková cena
					</h4>
					<h2 className='text-[24px] text-[#090030] font-[750]'>4 800 Kč</h2>
				</section>
			</section>
		</section>
	);
};
