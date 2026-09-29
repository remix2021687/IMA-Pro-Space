export const NotFoundPageContent: React.FC = () => {
	return (
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
	);
};
