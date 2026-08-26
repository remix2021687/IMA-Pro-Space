import { ServiceContentBox } from "./components";

interface IServiceContent {
	title: string;
	data: Array<{ name: string }>;
}

export const ServiceContent: React.FC<IServiceContent> = ({ title, data }) => {
	return (
		<section className='flex flex-col gap-8 w-full'>
			<section className='flex flex-col gap-4'>
				<h2 className='text-[24px] text-[#090030] font-semibold'>{title}</h2>
				<hr className='text-[#C9C4D3]' />
			</section>
			<section className='flex flex-col gap-6 max-h-100 overflow-y-scroll'>
				{data ? (
					data.map((data, index) => (
						<ServiceContentBox name={data.name} key={index + 1} />
					))
				) : (
					<section className='flex flex-col items-center justify-center h-25'>
						<h2 className='text-[18px] text-[#484551]'>
							Vyberte Službu pro zobrazení
						</h2>
					</section>
				)}
			</section>
		</section>
	);
};
