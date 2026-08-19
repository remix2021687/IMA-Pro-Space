interface IContactSectionMap {
	address: string;
	zoom?: number;
}

export const ContactSectionMap: React.FC<IContactSectionMap> = ({
	address,
	zoom,
}) => {
	const encodedAddress = encodeURIComponent(address);
	const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

	return (
		<section className='w-[50%]'>
			<iframe
				src={mapUrl}
				className='w-full h-full rounded-xl border-2 border-[#C9C4D3]'
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				title={`Map of ${address}`}
			/>
		</section>
	);
};
