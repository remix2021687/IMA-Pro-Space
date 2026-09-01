import {
	ServiceFromCompletedHeader,
	ServiceFromCompletedContent,
} from "./components";

export const ServiceFromCompleted: React.FC = () => {
	return (
		<section className='flex flex-col justify-center p-12 border border-[#C9C4D3] sticky left-full top-25 w-1/2 gap-8 rounded-xl'>
			<ServiceFromCompletedHeader />
			<ServiceFromCompletedContent />
		</section>
	);
};
