import {
	B2BPageContentReadySelect,
	B2BPageContentConfigurator,
} from "./components";

export const B2BPageContent: React.FC = () => {
	return (
		<section className='flex flex-row gap-6 w-full'>
			<B2BPageContentReadySelect />
			<B2BPageContentConfigurator />
		</section>
	);
};
