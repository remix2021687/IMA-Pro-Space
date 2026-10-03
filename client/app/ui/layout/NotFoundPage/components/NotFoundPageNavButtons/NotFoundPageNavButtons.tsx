import { NavButtons } from "./components";

export const NotFoundPageNavButtons: React.FC = () => {
	const dataList: Array<{
		type: "home" | "rooms";
		text: string;
		herf: string;
	}> = [
		{
			type: "home",
			text: "Zpět na hlavní stránku",
			herf: "",
		},
		{
			type: "rooms",
			text: "Prohlédnout prostory",
			herf: "room/",
		},
	];
	return (
		<section className='flex flex-row gap-4'>
			{dataList.map((data, index) => (
				<NavButtons
					key={index + 1}
					type={data.type}
					text={data.text}
					herf={data.herf}
					index={index}
				/>
			))}
		</section>
	);
};
