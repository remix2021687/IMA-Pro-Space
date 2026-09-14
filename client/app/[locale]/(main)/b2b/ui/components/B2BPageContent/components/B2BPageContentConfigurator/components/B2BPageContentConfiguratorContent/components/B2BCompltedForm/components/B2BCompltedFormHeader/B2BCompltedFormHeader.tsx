export const B2BCompltedFormHeader: React.FC<{ email?: string }> = ({
	email,
}) => {
	return (
		<section className='flex flex-col gap-2 items-center'>
			<h2 className='text-[32px] text-[#1C1B21] font-semibold'>
				Poptávka byla úspěšně odeslána
			</h2>
			<p className='max-w-140 text-[16px] text-[#484551] leading-[25.6px] text-center'>
				Potvrzení a detaily jsme odeslali na e-mail {""}
				<span className='text-[#1C1B21] font-semibold'>{email}</span>. Náš B2B
				tým se vám ozve do 24 hodin s kalkulací a možnostmi realizace.
			</p>
		</section>
	);
};
