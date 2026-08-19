import {
	ContactSectionMap,
	ContactSectionHeader,
	ContactSectionList,
} from "./components";

export const ContactSection: React.FC = () => {
	return (
		<section className='flex flex-row justify-between w-[80%]'>
			<section className='flex flex-col gap-4'>
				<ContactSectionHeader />
				<ContactSectionList />
			</section>
			<ContactSectionMap
				address='Českomoravská 2510/19 190 00 Praha 9'
				zoom={15}
			/>
		</section>
	);
};
