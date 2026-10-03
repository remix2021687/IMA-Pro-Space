import { useTranslations } from "next-intl";
import { NavButtons } from "./components";

export const NotFoundPageNavButtons: React.FC = () => {
	const t = useTranslations("NotFoundPageNavButtons");
	const dataList: Array<{
		type: "home" | "rooms";
		text: string;
		herf: string;
	}> = [
		{
			type: "home",
			text: t("step_1"),
			herf: "",
		},
		{
			type: "rooms",
			text: t("step_2"),
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
					index={index + 1}
				/>
			))}
		</section>
	);
};
