import { ServiceContentBox } from "./components";

interface IServiceContent {
	id?: string;
	title: string;
}

export const ServiceContent: React.FC<IServiceContent> = ({ id, title }) => {
	const ListData: Array<{ name: string }> = [
		{
			name: "Polohovací lehátko",
		},
		{
			name: "Polohovací lehátko",
		},
		{
			name: "Polohovací lehátko",
		},
		{
			name: "Polohovací lehátko",
		},
		{
			name: "Polohovací lehátko",
		},
		{
			name: "Polohovací lehátko",
		},
	];

	return (
		<section className='flex flex-col gap-8 w-full'>
			<section className='flex flex-col gap-4'>
				<h2 className='text-[24px] text-[#090030] font-semibold'>{title}</h2>
				<hr className='text-[#C9C4D3]' />
			</section>
			<section className='flex flex-col gap-6 max-h-100 overflow-y-scroll'>
				{ListData.map((data, index) => (
					<ServiceContentBox name={data.name} key={index + 1} />
				))}
			</section>
		</section>
	);
};
