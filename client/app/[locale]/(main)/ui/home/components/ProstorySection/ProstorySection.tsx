import {
	ProstorySectionHeader,
	ProstorySectionContent,
	ProstorySectionButton,
} from "./components";

export const ProstorySection: React.FC = () => {
	return (
		<section
			id='prostory'
			className='flex flex-col w-[80%] gap-12 max-md:w-full'>
			<ProstorySectionHeader />
			<ProstorySectionContent />
			<section className='flex flex-col items-center'>
				<ProstorySectionButton />
			</section>
		</section>
	);
};
