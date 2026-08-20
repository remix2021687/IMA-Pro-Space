import {
	HeroSectionInfo,
	HeroSectionPrice,
	HeroSectionLocation,
	HeroSectionButton,
	HeroSectionImage,
} from "./components";

export const HeroSection: React.FC = () => {
	return (
		<section className='flex flex-row items-center justify-between max-md:flex-col max-md:mx-8 w-[80%]'>
			<section className='flex flex-col gap-8 items-start max-sm:items-center max-sm:text-center'>
				<HeroSectionInfo />
				<section className='flex flex-row gap-9 items-center justify-center max-sm:flex-col'>
					<HeroSectionPrice />
					<HeroSectionLocation />
				</section>
				<HeroSectionButton />
			</section>
			<HeroSectionImage />
		</section>
	);
};
