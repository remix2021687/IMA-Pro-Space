import Link from "next/link";

type LinksType = {
	label: string;
	path: string;
};

export const NavLink: React.FC = () => {
	const Linsk: LinksType[] = [
		{ label: "Prostory", path: "/" },
		{ label: "B2B", path: "/" },
		{ label: "Kontakt", path: "/" },
	];

	return (
		<section className='flex flex-row items-center justify-center gap-16 font-bold text-[#484551] max-md:hidden'>
			{Linsk.map((data, index) => {
				return (
					<Link key={index + 1} href={data.path}>
						{data.label}
					</Link>
				);
			})}
		</section>
	);
};
