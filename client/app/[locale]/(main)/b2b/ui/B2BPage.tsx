import { B2BPageHeader, B2BPageContent } from "./components";

export const B2BPage: React.FC = () => {
	return (
		<section className='flex flex-col gap-8 w-full'>
			<B2BPageHeader />
			<B2BPageContent />
		</section>
	);
};
