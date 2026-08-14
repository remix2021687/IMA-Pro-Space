import img from "@public/img/DSC09905.jpg";
import Image from "next/image";

export const ProstoryCard: React.FC = () => {
	return (
		<section className='flex flex-col overflow-hidden'>
			<Image
				src={img}
				alt='img'
				width={388}
				loading='lazy'
				placeholder='blur'
			/>
		</section>
	);
};
