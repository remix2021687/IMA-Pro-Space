import img from "@public/img/DSC09613-2.jpg";
import Image from "next/image";
import {
	HeroSectionInfo,
	HeroSectionPrice,
	HeroSectionLocation,
	HeroSectionButton,
} from "./components";

export const HeroSection: React.FC = () => {
	return (
		<section className='flex flex-row items-center'>
			<section className='flex flex-col gap-8 items-start'>
				<HeroSectionInfo />
				<section className='flex flex-row gap-9 items-center justify-center'>
					<HeroSectionPrice />
					<HeroSectionLocation />
				</section>
				<HeroSectionButton />
			</section>
			<Image src={img} alt='img' width={800} className='rounded-xl' />
		</section>
	);
};
