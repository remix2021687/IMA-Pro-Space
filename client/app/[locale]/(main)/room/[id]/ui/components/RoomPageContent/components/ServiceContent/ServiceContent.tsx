import { ServiceContentHeader, ServiceContentList } from "./components";

interface IServiceContent {
	title: string;
	data: Array<{ name: string }>;
}

export const ServiceContent: React.FC<IServiceContent> = ({ title, data }) => {
	return (
		<section className='flex flex-col gap-8 w-full'>
			<ServiceContentHeader title={title} />
			<ServiceContentList data={data} />
		</section>
	);
};
