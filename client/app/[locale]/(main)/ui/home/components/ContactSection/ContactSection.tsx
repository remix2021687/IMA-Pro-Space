import {
	ContactSectionMap,
	ContactSectionHeader,
	ContactSectionList,
} from "./components";

export const ContactSection: React.FC = () => {
	return (
		<section
			id='contact'
			className='flex flex-row justify-between w-[80%] max-md:flex-col max-md:w-full max-md:items-center max-md:gap-10'>
			<section className='flex flex-col gap-4 max-md:items-center'>
				<ContactSectionHeader />
				<ContactSectionList />
			</section>
			<ContactSectionMap address='Křižíkova 2136/2A, 186 00 Karlín' zoom={15} />
		</section>
	);
};
