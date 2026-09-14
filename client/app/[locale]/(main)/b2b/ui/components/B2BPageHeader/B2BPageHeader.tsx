export const B2BPageHeader: React.FC = () => {
	return (
		<section className='flex flex-row justify-between items-end w-full max-md:flex-col max-md:items-start max-sm:text-center max-sm:items-center'>
			<section className='flex flex-col gap-4'>
				<h4 className='text-[12px] text-[#090030] font-bold max-sm:text-[10px]'>
					NÁSTROJ PRO BRANDY A DISTRIBUTORY
				</h4>
				<h2 className='text-[48px] text-[#090030] font-bold max-sm:text-[30px]'>
					B2B-konfigurátor
				</h2>
			</section>
			<p className='max-w-md text-[18px] text-[#484551] font-medium max-sm:text-[14px]'>
				Moduly prostoru jsou zbaveny identity – žijí zde jako nástroj pronájmu
				pro potřeby vaší značky.
			</p>
		</section>
	);
};
