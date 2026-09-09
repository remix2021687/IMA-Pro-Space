import {
	B2BPageContentConfiguratorContentFooterButton,
	B2BSelected,
} from "./components";

export const B2BPageContentConfiguratorContentFooter: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<section className='flex flex-col gap-8 p-12'>
			<hr className='text-[#C9C4D3]' />
			<section className='flex flex-col gap-6 items-end justify-between w-full'>
				<section className='flex flex-row items-start w-full'>
					<B2BSelected />
				</section>
				{children}
				<B2BPageContentConfiguratorContentFooterButton />
			</section>
		</section>
	);
};
