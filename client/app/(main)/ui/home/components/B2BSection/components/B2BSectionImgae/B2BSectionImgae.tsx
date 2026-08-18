"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import bg from "@public/svg/svg-bg.svg";

export const B2BSectionImgae: React.FC = () => {
	const ImgRef = useRef<HTMLImageElement>(null);

	useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ImgRef.current,
						start: "top 80%",
						once: true,
					},
					defaults: {
						ease: "power2.out",
						duration: 0.6,
					},
				})
				.from(ImgRef.current, {
					x: 50,
					delay: 0.5,
					opacity: 0,
				});
		},
		{ scope: ImgRef },
	);

	return <Image ref={ImgRef} src={bg} alt='bg' loading='lazy' />;
};
