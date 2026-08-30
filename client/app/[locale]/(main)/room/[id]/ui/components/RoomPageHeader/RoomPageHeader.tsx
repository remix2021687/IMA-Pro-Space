import { RoomPageHeaderInfo, RoomPageHeaderImage } from "./components";
interface IRoomPageHeader {
	data: {
		name: string;
		description: string;
		photo: string;
	};
}

export const RoomPageHeader: React.FC<IRoomPageHeader> = ({ data }) => {
	return (
		<section className='flex flex-row items-center justify-between w-full'>
			<RoomPageHeaderInfo name={data.name} description={data.description} />

			<RoomPageHeaderImage photo={data.photo} />
		</section>
	);
};
