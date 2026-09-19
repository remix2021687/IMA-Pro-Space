"use client";

import { useRef } from "react";
import { useAppSelector } from "@lib/store/hooks";
import { Checkbox, CheckboxChangeEvent, ConfigProvider } from "antd";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface IB2BSelectBox {
	name: string;
	description: string;
	index: number;
	retunData: (name: string, is_selected: boolean) => void;
}

export const B2BSelectBox: React.FC<IB2BSelectBox> = ({
	name,
	description,
	index,
	retunData,
}) => {
	const containerRef = useRef<HTMLElement>(null);
	const SelectedState = useAppSelector((state) =>
		state.B2BSlice.selectedBox.includes(name),
	);
	const SuccessState = useAppSelector((state) => state.B2BSlice.Success);
	const onChange = (e: CheckboxChangeEvent) => {
		const isChecked = e.target.checked;

		retunData(name, isChecked);
	};

	useGSAP(
		() => {
			if (!containerRef.current) return;

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					once: true,
				},
				defaults: {
					duration: 0.4,
					ease: "power3.out",
				},
			});

			tl.from(
				containerRef.current,
				{
					x: 30,
					opacity: 0,
				},
				index * 0.2,
			);
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className='flex flex-row justify-between items-center w-full px-12 py-6 max-sm:px-6'>
			<section className='flex flex-col gap-1'>
				<h2 className='text-[24px] text-[#1C1B21] font-semibold'>{name}</h2>
				<span className='text-[16px] text-[#797583]'>{description}</span>
			</section>
			<ConfigProvider
				theme={{
					components: {
						Checkbox: {
							colorBorder: "#20026E",
							colorPrimary: "#20026E",
							colorPrimaryHover: "#20026E",
							controlInteractiveSize: 26,
						},
					},
				}}>
				<Checkbox
					disabled={SuccessState}
					onChange={onChange}
					checked={SelectedState}
				/>
			</ConfigProvider>
		</section>
	);
};
