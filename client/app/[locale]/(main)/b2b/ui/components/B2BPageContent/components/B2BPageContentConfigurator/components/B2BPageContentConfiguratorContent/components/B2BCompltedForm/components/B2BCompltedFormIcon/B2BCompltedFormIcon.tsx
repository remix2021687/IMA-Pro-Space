"use client";

import { useRef } from "react";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";

interface IB2BCompltedFormIcon {
	parantTL: gsap.core.Timeline | null;
}

export const B2BCompltedFormIcon: React.FC<IB2BCompltedFormIcon> = ({
	parantTL,
}) => {
	const IconRef = useRef<SVGSVGElement>(null);

	useGSAP(
		() => {
			if (!IconRef.current || !parantTL) return;

			parantTL.from(IconRef.current, {
				scale: 0,
			});
		},
		{ dependencies: [parantTL] },
	);

	return (
		<CheckCircleIcon ref={IconRef} size={64} color='#090030' weight='fill' />
	);
};
