import { StepsSectionHeader, StepsSectionContent } from "./components";

export const StepsSection: React.FC = () => {
	return (
		<section className='flex flex-col py-20 gap-20 w-[80%] max-md:w-full'>
			<StepsSectionHeader />
			<StepsSectionContent />
		</section>
	);
};
