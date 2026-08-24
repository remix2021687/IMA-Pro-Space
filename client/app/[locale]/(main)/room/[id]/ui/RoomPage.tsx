import { RoomPageHeader, RoomPageContent } from "./components";

export const RoomPage: React.FC = () => {
	return (
		<section className='flex flex-col gap-20 w-[80%]'>
			<RoomPageHeader />
			<RoomPageContent />
		</section>
	);
};
