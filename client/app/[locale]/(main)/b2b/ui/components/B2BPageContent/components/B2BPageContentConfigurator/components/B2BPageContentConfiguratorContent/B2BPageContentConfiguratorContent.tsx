"use client";

import { B2BPageContentConfiguratorContentFooter, B2BList } from "./components";

export const B2BPageContentConfiguratorContent: React.FC = () => {
	return (
		<section className='flex flex-col gap-8'>
			<B2BList />
			<B2BPageContentConfiguratorContentFooter />
		</section>
	);
};
