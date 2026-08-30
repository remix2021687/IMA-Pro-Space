import { ServiceContentBox } from "./components";

interface IServiceContentList {
	data: {
		name: string;
	}[];
}

export const ServiceContentList: React.FC<IServiceContentList> = ({ data }) => {
	return (
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
	);
};
