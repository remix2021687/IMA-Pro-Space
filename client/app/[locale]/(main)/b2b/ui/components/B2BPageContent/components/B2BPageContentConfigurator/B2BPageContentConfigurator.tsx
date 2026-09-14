import {
	B2BPageContentConfiguratorHeader,
	B2BPageContentConfiguratorContent,
} from "./components";

export const B2BPageContentConfigurator: React.FC = () => {
	return (
		<section className='flex flex-col w-full border border-[#C9C4D3] rounded-xl'>
			<B2BPageContentConfiguratorHeader />
			<B2BPageContentConfiguratorContent />
		</section>
	);
};
