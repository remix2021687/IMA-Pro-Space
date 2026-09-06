export const B2BPageHeader: React.FC = () => {
	return (
		<section className='flex flex-row justify-between items-end w-full'>
			<section className='flex flex-col gap-4'>
				<h4 className='text-[12px] text-[#090030] font-bold'>
					NÁSTROJ PRO BRANDY A DISTRIBUTORY
				</h4>
				<h2 className='text-[48px] text-[#090030] font-bold'>
					B2B-konfigurátor
				</h2>
			</section>
			<p className='max-w-md text-[18px] text-[#484551] font-medium'>
				Moduly prostoru jsou zbaveny identity – žijí zde jako nástroj pronájmu
				pro potřeby vaší značky.
			</p>
		</section>
	);
};
