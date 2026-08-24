import { ServiceContent, ServiceFrom } from "./components";

export const RoomPageContent: React.FC = () => {
	return (
		<section className='flex flex-row'>
			<section className='flex flex-col gap-10 w-1/4'>
				<ServiceContent title='Vybavení Kabinetu' />
				<ServiceContent title='Obsah služby' />
			</section>
			<ServiceFrom />
		</section>
	);
};
