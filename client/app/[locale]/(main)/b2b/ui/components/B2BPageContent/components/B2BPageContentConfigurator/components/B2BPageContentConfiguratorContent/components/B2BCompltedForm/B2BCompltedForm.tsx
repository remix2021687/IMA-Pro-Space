import { TextBox } from "@app/components";
import { useAppSelector } from "@lib/store/hooks";
import { CheckCircleIcon } from "@phosphor-icons/react";

export const B2BCompltedForm: React.FC = () => {
	const formDate = useAppSelector((state) => state.B2BSlice.formSend);
	const SelectedState = useAppSelector((state) => state.B2BSlice.selectedBox);
	const resulte = SelectedState.map((item) => item).join(" + ");

	return (
		<section className='flex flex-col items-center gap-6 w-full my-6 mb-20'>
			<CheckCircleIcon size={64} color='#090030' weight='fill' />
			<section className='flex flex-col gap-2 items-center'>
				<h2 className='text-[32px] text-[#1C1B21] font-semibold'>
					Poptávka byla úspěšně odeslána
				</h2>
				<p className='max-w-140 text-[16px] text-[#484551] leading-[25.6px] text-center'>
					Potvrzení a detaily jsme odeslali na e-mail {""}
					<span className='text-[#1C1B21] font-semibold'>{formDate.email}</span>
					. Náš B2B tým se vám ozve do 24 hodin s kalkulací a možnostmi
					realizace.
				</p>
			</section>
			<section className='flex flex-col gap-4 p-8 w-full border border-[#C9C4D3] max-w-[50%] rounded-xl'>
				<section className='flex flex-col gap-2 w-full'>
					<section className='flex flex-row justify-between'>
						<h3 className='text-[12px] text-[#484551] font-bold'>
							SHRNUTÍ POPTÁVKY
						</h3>
						<span className='text-[14px] text-[#20026E] font-bold'>B2B</span>
					</section>
					<hr className='text-[#C9C4D3]' />
				</section>
				<section className='flex flex-row justify-between w-full'>
					<section className='flex flex-col gap-6'>
						<TextBox title={resulte} name='VYBRANÁ KONFIGURACE' />
						<TextBox title={formDate.fullname} name='KONTAKTNÍ OSOBA' />
					</section>
					<section className='flex flex-col gap-6 '>
						<TextBox title={formDate.email} name='E-MAIL' />
						<TextBox title={formDate.date} name='TERMÍN' />
					</section>
				</section>
			</section>
		</section>
	);
};
