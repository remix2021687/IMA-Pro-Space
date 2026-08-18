import { FooterLeft, FooterCenter, FooterRight } from "./components";

export const Footer: React.FC = () => {
	return (
		<section className='flex flex-row items-center justify-between p-8 border-t-2 border-[#C9C4D3] max-md:flex-col max-md:justify-center max-md:text-center max-md:gap-10'>
			<FooterLeft />
			<FooterCenter />
			<FooterRight />
		</section>
	);
};
