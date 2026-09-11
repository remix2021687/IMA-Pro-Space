"use clinet";

import { Skeleton } from "antd";

import { B2BSelectBox } from "./components";
import { useAppDispatch, useAppSelector } from "@lib/store/hooks";
import { setB2BSelectedBox } from "@lib/store/slice/B2BSlice/B2BSlice";
import { useGetB2BTypeListQuery } from "@lib/store/api/APIs/B2BAPI";

export const B2BList: React.FC = () => {
	const dispatch = useAppDispatch();
	const SelectedBoxState = useAppSelector(
		(state) => state.B2BSlice.selectedBox,
	);
	const { data: ListData = [], isLoading } = useGetB2BTypeListQuery();

	const returnedData = (name: string, isChecked: boolean) => {
		dispatch(setB2BSelectedBox({ name, isSelected: isChecked }));
	};

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
					<B2BSelectBox
						key={index}
						name={data.name}
						description={data.notes}
						retunData={returnedData}
					/>
				))
			)}
			{SelectedBoxState.length === 0 ? (
				<span className='mx-12 text-red-600 font-semibold'>
					Vyberte 1 nebo více
				</span>
			) : null}
		</>
	);
};
