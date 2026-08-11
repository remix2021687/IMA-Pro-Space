import Link from "next/link";
import { manrope } from "@ui/fonts";

export const NavLink: React.FC = () => {
	return (
		<section className='flex flex-row items-center justify-center gap-16 font-bold text-[#484551] max-md:hidden'>
			<Link href={"/"}>Prostory</Link>
			<Link href={"/"}>B2B</Link>
			<Link href={"/"}>Kontakt</Link>
		</section>
	);
};
