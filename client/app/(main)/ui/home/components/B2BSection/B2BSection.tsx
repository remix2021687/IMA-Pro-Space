import Image from "next/image";

import { B2BSectionInfo, B2BSectionList, B2BSectionButton } from "./components";
import bg from "@public/svg/svg-bg.svg";

export const B2BSection: React.FC = () => {
	return (
		<section className='flex flex-row items-center justify-between w-[80%]'>
			<section className='flex flex-col gap-8'>
				<B2BSectionInfo />
				<B2BSectionList />
				<B2BSectionButton />
			</section>

			<Image src={bg} alt='bg' loading='lazy' className='size-125' />
		</section>
	);
};
