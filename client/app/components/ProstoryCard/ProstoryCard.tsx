import img from "@public/img/DSC09905.jpg";
import Image from "next/image";

export const ProstoryCard: React.FC = () => {
	return (
		<section className='flex flex-col overflow-hidden rounded-xl'>
			<Image
				src={img}
				alt='img'
				width={388}
				loading='lazy'
				placeholder='blur'
			/>
			<section>
				<h2></h2>
				<section></section>
			</section>
		</section>
	);
};
