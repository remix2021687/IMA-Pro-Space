import {
	B2BSelectBox,
	B2BPageContentConfiguratorContentFooter,
} from "./components";

export const B2BPageContentConfiguratorContent: React.FC = () => {
	const TestList: Array<{ name: string; description: string }> = [
		{
			name: "Sál",
			description: "do 50 osob · projekce",
		},
		{
			name: "Přenos / stream",
			description: "kamery, režie, online",
		},
		{
			name: "Kabinety",
			description: "A1 · B1 · B2 · D1",
		},
		{
			name: "Terasa",
			description: "networking, catering",
		},
	];

	return (
		<section className='flex flex-col gap-8'>
			{TestList.map((data, index) => (
				<B2BSelectBox
					key={index}
					name={data.name}
					description={data.description}
				/>
			))}

			<B2BPageContentConfiguratorContentFooter />
		</section>
	);
};
