import { ProstorySectionHeader, ProstorySectionContent } from "./components";

export const ProstorySection: React.FC = () => {
	return (
		<section className='flex flex-col w-[80%] gap-12'>
			<ProstorySectionHeader />
			<ProstorySectionContent />
		</section>
	);
};
