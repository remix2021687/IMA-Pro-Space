import { StepsBox } from "./components";

export const StepsSection: React.FC = () => {
	const TestData: Array<{ title: string; text: string }> = [
		{
			title: "Akademie IMA",
			text: "Získání certifikace a dovedností.",
		},
		{
			title: "Praxe",
			text: "První klienti pod dohledem mentorů.",
		},
		{
			title: "Pronájem",
			text: "Samostatná práce v profi zázemí.",
		},
		{
			title: "Vlastní praxe",
			text: "Budování vlastního byznysu.",
		},
	];
	return (
		<section className='flex flex-col py-20 gap-20 w-[80%]'>
			<section className='flex flex-col gap-4 text-center'>
				<h4 className='text-[14px] text-[#090030] font-bold'>
					CESTA SPECIALISTY
				</h4>
				<h2 className='text-[32px] text-[#1C1B20] font-semibold'>
					Jak to funguje
				</h2>
			</section>
			<section className='flex flex-row justify-between gap-4 relative'>
				{/* <hr className='absolute top-1/2 w-full' /> */}
				{TestData.map((data, index) => (
					<StepsBox
						key={index + 1}
						index={index + 1}
						title={data.title}
						text={data.text}
					/>
				))}
			</section>
		</section>
	);
};
