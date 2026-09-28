export const NotFoundPage: React.FC = () => {
	return (
		<section className='flex flex-col gap-8 items-center justify-center w-full h-full'>
			<section className='flex flex-row justify-center items-center gap-3.5 px-4 py-2 bg-[#F7F2FA] rounded-full'>
				<span className='w-1.5 h-1.5 rounded-full bg-[#21026E]'></span>
				<h4>CHYBA 404 · STRÁNKA NENALEZENA</h4>
			</section>
			<section className='text-center'>
				<h1 className='text-[180px] text-[#090030] font-bold'>404</h1>
				<section className='flex flex-col items-center gap-4'>
					<h2 className='text-[32px] font-semibold'>
						Tato stránka neexistuje nebo byla přesunuta.
					</h2>
					<p className='text-[16px] text-[#484551] max-w-130'>
						Zadaná adresa URL nebyla nalezena. Zkontrolujte prosím správnost
						odkazu nebo pokračujte na jednu z klíčových sekcí prostoru.
					</p>
				</section>
			</section>
			<section className='flex flex-row gap-4'>
				<button className='px-8 py-4 bg-[#21026E] text-[18px] text-white font-medium rounded-lg cursor-pointer'>
					Zpět na hlavní stránku
				</button>
				<button className='px-8 py-4 bg-[#EBE6EE] text-[18px] text-black font-medium rounded-lg cursor-pointer'>
					Prohlédnout prostory
				</button>
			</section>
		</section>
	);
};
