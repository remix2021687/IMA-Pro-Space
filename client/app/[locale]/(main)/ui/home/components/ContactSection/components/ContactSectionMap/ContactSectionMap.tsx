"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
interface IContactSectionMap {
	address: string;
	zoom?: number;
}

export const ContactSectionMap: React.FC<IContactSectionMap> = ({
	address,
	zoom,
}) => {
	const containerRef = useRef<HTMLElement>(null);
	const encodedAddress = encodeURIComponent(address);
	const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
			});

			tl.from(".iframeEL", {
				x: 30,
				opacity: 0,
				duration: 0.6,
				ease: "power3.out",
			});
		},
		{ scope: containerRef },
	);

	return (
		<section ref={containerRef} className='w-[50%] max-md:w-full max-md:h-125'>
			<iframe
				src={mapUrl}
				className='w-full h-full rounded-xl border-2 border-[#C9C4D3] iframeEL'
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				title={`Map of ${address}`}
			/>
		</section>
	);
};
