import Link from "next/link";
import { useAppDispatch } from "@lib/store/hooks";
import { Close } from "@lib/store/slice/OpenMenuSlice";

type LinksType = {
	label: string;
	path: string;
	onclick: () => void;
};

export const NavLink: React.FC = () => {
	const dispatch = useAppDispatch();

	const Linsk: LinksType[] = [
		{ label: "Prostory", path: "/", onclick: () => dispatch(Close()) },
		{ label: "B2B", path: "/", onclick: () => dispatch(Close()) },
		{ label: "Kontakt", path: "/", onclick: () => dispatch(Close()) },
	];

	return (
		<section className='flex flex-row items-center justify-center gap-16 font-bold text-[#484551] max-md:flex-col max-md:gap-3'>
			{Linsk.map((data, index) => {
				return (
					<Link onClick={data.onclick} key={index + 1} href={data.path}>
						{data.label}
					</Link>
				);
			})}
		</section>
	);
};
