import { ProstorySectionHeader } from "./components";
import { ProstoryCard } from "@app/components";

export const ProstorySection: React.FC = () => {
	return (
		<section className='flex flex-col w-[80%] gap-12'>
			<ProstorySectionHeader />
			<section className='flex flex-row justify-between gap-6'>
				<ProstoryCard />
				<ProstoryCard />
				<ProstoryCard />
			</section>
		</section>
	);
};
