import {
	B2BPageContentConfiguratorContentFooterButton,
	B2BSelected,
} from "./components";

export const B2BPageContentConfiguratorContentFooter: React.FC = () => {
	return (
		<section className='flex flex-col gap-8 p-12'>
			<hr className='text-[#C9C4D3]' />
			<section className='flex flex-row  items-end justify-between w-full'>
				<B2BSelected />
				<B2BPageContentConfiguratorContentFooterButton />
			</section>
		</section>
	);
};
