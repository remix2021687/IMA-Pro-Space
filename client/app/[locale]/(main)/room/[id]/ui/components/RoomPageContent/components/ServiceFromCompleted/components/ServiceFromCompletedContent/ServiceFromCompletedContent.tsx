import {
	ServiceFromCompletedContentHeader,
	ServiceFromCompletedContent_Content,
	ServiceFromCompletedContentFooter,
} from "./components";

export const ServiceFromCompletedContent: React.FC = () => {
	return (
		<section className='flex flex-col gap-8 p-8 border border-[#C9C4D3] rounded-xl max-sm:p-6'>
			<ServiceFromCompletedContentHeader />
			<ServiceFromCompletedContent_Content />
			<ServiceFromCompletedContentFooter />
		</section>
	);
};
