"use clinet";

import { Skeleton } from "antd";

import { B2BSelectBox } from "./components";
import { useGetB2BTypeListQuery } from "@lib/store/api/APIs/B2BAPI";

export const B2BList: React.FC = () => {
	const { data: ListData = [], isLoading } = useGetB2BTypeListQuery();
	return (
		<>
			{isLoading ? (
				<section className='flex flex-col gap-2 p-12'>
					<Skeleton active />
					<Skeleton active />
					<Skeleton active />
				</section>
			) : (
				ListData.map((data, index) => (
					<B2BSelectBox key={index} name={data.name} description={data.notes} />
				))
			)}
		</>
	);
};
