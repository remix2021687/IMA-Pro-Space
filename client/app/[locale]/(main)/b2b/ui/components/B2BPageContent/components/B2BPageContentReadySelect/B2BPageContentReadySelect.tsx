"use client";

import { useRef } from "react";
import { Skeleton } from "antd";
import { B2BReadySelectButton } from "./components";
import { useGetB2BReadyListQuery } from "@lib/store/api/APIs/B2BAPI";

export const B2BPageContentReadySelect: React.FC = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { data: ReadyList = [], isLoading } = useGetB2BReadyListQuery();

	// const onClick = contextSafe((e: React.MouseEvent<HTMLElement>) => {
	// });

	return (
		<section
			ref={containerRef}
			className='flex flex-col p-8 border border-[#C9C4D3] rounded-xl gap-8 w-[30%] h-fit sticky top-30'>
			<h2 className='text-[12px] text-[#090030] font-bold'>
				KOMBINACE PRO ÚKOL
			</h2>
			<section className='flex flex-col gap-6'>
				{isLoading ? (
					<section className='flex flex-col gap-6'>
						<Skeleton active />
						<Skeleton active />
						<Skeleton active />
					</section>
				) : (
					ReadyList.map((data, index) => (
						<B2BReadySelectButton
							key={index + 1}
							name={data.name}
							content={data.b2b_type}
							refParant={containerRef}
						/>
					))
				)}
			</section>
		</section>
	);
};
