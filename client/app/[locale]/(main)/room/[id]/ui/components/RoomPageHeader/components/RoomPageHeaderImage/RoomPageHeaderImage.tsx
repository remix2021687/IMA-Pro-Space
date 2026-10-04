"use client";

import { useRef } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const RoomPageHeaderImage: React.FC<{ photo: string }> = ({ photo }) => {
	const ImageRef = useRef<HTMLImageElement>(null);

	useGSAP(
		() => {
			if (!ImageRef.current) return;

			gsap.from(ImageRef.current, {
				scrollTrigger: {
					trigger: ImageRef.current,
					start: "top 80%",
					once: true,
				},
				x: 30,
				opacity: 0,
				duration: 0.8,
				delay: 1,
				ease: "power3.out",
			});
		},
		{ scope: ImageRef },
	);

	return (
		<>
			<Image
				ref={ImageRef}
				src={photo}
				loading='eager'
				alt='photo'
				width={600}
				height={600}
				className='rounded-xl'
			/>
		</>
	);
};
