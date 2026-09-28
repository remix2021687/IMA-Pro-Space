import {
	NotFoundPageBadge,
	NotFoundPageContent,
	NotFoundPageNavButtons,
} from "./components";

export const NotFoundPage: React.FC = () => {
	return (
		<section className='flex flex-col gap-8 items-center justify-center w-full h-full'>
			<NotFoundPageBadge />
			<NotFoundPageContent />
			<NotFoundPageNavButtons />
		</section>
	);
};
