import { NavButtons } from "./components";

export const NotFoundPageNavButtons: React.FC = () => {
	return (
		<section className='flex flex-row gap-4'>
			<NavButtons text='Zpět na hlavní stránku' type='home' herf='' />
			<NavButtons text='Prohlédnout prostory' type='rooms' herf='room/' />
		</section>
	);
};
