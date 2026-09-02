import { RoomListPageHeader, RoomListPageContent } from "./components";

export const RoomListPage = () => {
	return (
		<section className='flex flex-col w-full gap-8'>
			<RoomListPageHeader />
			<RoomListPageContent />
		</section>
	);
};
