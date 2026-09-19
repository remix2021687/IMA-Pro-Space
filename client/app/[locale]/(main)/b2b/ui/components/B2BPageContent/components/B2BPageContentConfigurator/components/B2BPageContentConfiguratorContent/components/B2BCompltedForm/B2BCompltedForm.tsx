"use client";

import { useRef, useState } from "react";
import { useAppSelector } from "@lib/store/hooks";
import {
	B2BCompltedFormIcon,
	B2BCompltedFormHeader,
	B2BCompltedFormContent,
} from "./components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const B2BCompltedForm: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const [parantTL, setParantTL] = useState<gsap.core.Timeline | null>(null);
	const formDate = useAppSelector((state) => state.B2BSlice.formSend);
	const SelectedState = useAppSelector((state) => state.B2BSlice.selectedBox);
	const resulte = SelectedState.map((item) => item).join(" + ");

	useGSAP(
		() => {
			const tl = gsap.timeline({
				defaults: {
					duration: 0.5,
					ease: "power3.out",
				},
			});

			setParantTL(tl);
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-col items-center gap-6 w-full my-6 mb-20'>
			<B2BCompltedFormIcon parantTL={parantTL} />
			<B2BCompltedFormHeader email={formDate.email} parantTL={parantTL} />
			<B2BCompltedFormContent
				resulte={resulte}
				fullname={formDate.fullname}
				email={formDate.email}
				date={formDate.date}
			/>
		</section>
	);
};
