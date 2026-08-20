import {
	ContactSectionMap,
	ContactSectionHeader,
	ContactSectionList,
} from "./components";

export const ContactSection: React.FC = () => {
	return (
		<section className='flex flex-row justify-between w-[80%] max-md:flex-col max-md:w-full max-md:items-center max-md:gap-10'>
			<section className='flex flex-col gap-4 max-md:items-center max-md:gap-10'>
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
