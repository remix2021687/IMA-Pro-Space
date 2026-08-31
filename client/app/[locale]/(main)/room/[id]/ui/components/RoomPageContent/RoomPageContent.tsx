import {
	ServiceContent,
	ServiceFrom,
	ServiceFromCompleted,
} from "./components";
import { useAppSelector } from "@lib/store/hooks";

export const RoomPageContent: React.FC = () => {
	const ServiceState = useAppSelector((state) => state.RoomPageSlice.service);

	return (
		<section className='flex flex-row max-md:flex-col max-md:gap-20 max-md:w-full'>
			<section className='flex flex-col gap-10 w-1/4 max-md:w-full'>
				<ServiceContent title='Vybavení Kabinetu' data={ServiceState.content} />
				<ServiceContent title='Obsah služby' data={ServiceState.equipment} />
			</section>
			{/* <ServiceFrom /> */}
			<ServiceFromCompleted />
		</section>
	);
};
