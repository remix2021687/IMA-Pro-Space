"use client";

import img from "@public/img/DSC09613-2.jpg";
import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const HeroSectionImage: React.FC = () => {
	const ImgRef = useRef<HTMLImageElement>(null);

	useGSAP(
		() => {
			gsap.from(ImgRef.current, {
				x: 50,
				opacity: 0,
				duration: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: ImgRef.current,
					start: "top 80%",
					once: true,
				},
			});
		},
		{ scope: ImgRef },
	);

	return (
		<Image
			ref={ImgRef}
			src={img}
			alt='img'
			width={800}
			className='rounded-xl'
			loading='lazy'
			placeholder='blur'
		/>
	);
};
