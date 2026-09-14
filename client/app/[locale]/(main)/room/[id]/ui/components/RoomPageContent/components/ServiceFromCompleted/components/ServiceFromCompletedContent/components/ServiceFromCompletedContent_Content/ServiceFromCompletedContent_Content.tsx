import { TextBox } from "@app/components";
import { useAppSelector } from "@lib/store/hooks";

export const ServiceFromCompletedContent_Content: React.FC = () => {
	const ServiceRoomCompltedState = useAppSelector(
		(state) => state.RoomPageSlice.ServiceRoomComplted,
	);

	return (
		<section className='flex flex-row gap-6 w-full justify-between'>
			<section className='flex flex-col w-full items-start gap-8'>
				<TextBox name='JMÉNO' title={`${ServiceRoomCompltedState.fullname}`} />

				<TextBox name='PROSTOR' title={`${ServiceRoomCompltedState.space}`} />
			</section>
			<section className='flex flex-col w-full justify-between'>
				<TextBox name='DATUM' title={`${ServiceRoomCompltedState.date}`} />

				<TextBox name='ČAS' title={`${ServiceRoomCompltedState.time}`} />
			</section>
		</section>
	);
};
