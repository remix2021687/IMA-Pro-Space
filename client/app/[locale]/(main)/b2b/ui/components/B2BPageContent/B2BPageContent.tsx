import {
	B2BPageContentReadySelect,
	B2BPageContentConfigurator,
} from "./components";

export const B2BPageContent: React.FC = () => {
	return (
		<section className='flex flex-row gap-6 w-full max-md:flex-col'>
			<B2BPageContentReadySelect />
			<B2BPageContentConfigurator />
		</section>
	);
};
