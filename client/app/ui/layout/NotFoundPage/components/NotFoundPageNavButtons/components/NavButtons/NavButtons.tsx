import { useLocale } from "next-intl";
import Link from "next/link";
import clsx from "clsx";

interface INavButtons {
	text: string;
	type: "home" | "rooms";
	herf: string;
}

export const NavButtons: React.FC<INavButtons> = ({ text, type, herf }) => {
	const locale = useLocale();

	return (
		<Link
			className={clsx(
				"px-8 py-4 text-[18px] font-medium rounded-lg cursor-pointer",
				{
					"bg-[#21026E] text-white": type === "home",
					"bg-[#EBE6EE] text-black": type === "rooms",
				},
			)}
			href={`/${locale}/${herf}`}>
			{text}
		</Link>
	);
};
