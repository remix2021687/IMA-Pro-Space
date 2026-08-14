import {
	HeroSectionInfo,
	HeroSectionPrice,
	HeroSectionLocation,
	HeroSectionButton,
	HeroSectionImage,
} from "./components";

export const HeroSection: React.FC = () => {
	return (
		<section className='flex flex-row items-center max-md:flex-col max-md:mx-8'>
			<section className='flex flex-col gap-8 items-start'>
				<HeroSectionInfo />
				<section className='flex flex-row gap-9 items-center justify-center'>
					<HeroSectionPrice />
					<HeroSectionLocation />
				</section>
				<HeroSectionButton />
			</section>
			<HeroSectionImage />
		</section>
	);
};
