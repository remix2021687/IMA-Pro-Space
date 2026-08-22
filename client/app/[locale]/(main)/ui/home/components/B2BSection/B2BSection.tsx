import {
	B2BSectionInfo,
	B2BSectionList,
	B2BSectionButton,
	B2BSectionImgae,
} from "./components";

export const B2BSection: React.FC = () => {
	return (
		<section
			id='B2B'
			className='flex flex-row items-center justify-between w-[80%] max-md:flex-col max-md:w-full max-md:gap-8'>
			<section className='flex flex-col gap-8 max-md:items-center'>
				<B2BSectionInfo />
				<B2BSectionList />
				<B2BSectionButton />
			</section>
			<B2BSectionImgae />
		</section>
	);
};
