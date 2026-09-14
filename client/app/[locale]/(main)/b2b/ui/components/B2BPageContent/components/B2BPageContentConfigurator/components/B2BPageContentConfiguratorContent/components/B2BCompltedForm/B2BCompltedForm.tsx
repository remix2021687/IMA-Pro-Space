import { useAppSelector } from "@lib/store/hooks";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { B2BCompltedFormHeader, B2BCompltedFormContent } from "./components";

export const B2BCompltedForm: React.FC = () => {
	const formDate = useAppSelector((state) => state.B2BSlice.formSend);
	const SelectedState = useAppSelector((state) => state.B2BSlice.selectedBox);
	const resulte = SelectedState.map((item) => item).join(" + ");

	return (
		<section className='flex flex-col items-center gap-6 w-full my-6 mb-20'>
			<CheckCircleIcon size={64} color='#090030' weight='fill' />
			<B2BCompltedFormHeader email={formDate.email} />
			<B2BCompltedFormContent
				resulte={resulte}
				fullname={formDate.fullname}
				email={formDate.email}
				date={formDate.date}
			/>
		</section>
	);
};
