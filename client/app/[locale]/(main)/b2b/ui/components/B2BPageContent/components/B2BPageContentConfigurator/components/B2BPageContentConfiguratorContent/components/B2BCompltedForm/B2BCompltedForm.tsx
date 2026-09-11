import { CheckCircleIcon } from "@phosphor-icons/react";

export const B2BCompltedForm: React.FC = () => {
	return (
		<section className='flex flex-col items-center w-full my-6'>
			<CheckCircleIcon size={50} color='#090030' weight='fill' />
			<section>
				<h2>Poptávka byla úspěšně odeslána</h2>
				<p>
					Potvrzení a detaily jsme odeslali na e-mail jan.novak@email.cz. Náš
					B2B tým se vám ozve do 24 hodin s kalkulací a možnostmi realizace.
				</p>
			</section>
		</section>
	);
};
