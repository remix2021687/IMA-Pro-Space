"use clinet";

import { useAppSelector } from "@lib/store/hooks";

export const B2BSelected: React.FC = () => {
	const SelectedState = useAppSelector((state) => state.B2BSlice.selectedBox);

	const resulte = SelectedState.map((item) => item).join(" + ");

	return (
		<>
			<h2 className='text-[18px] text-[#484551] font-medium'>
				Vybráno:{" "}
				<span className='text-[#20026E] font-bold'>
					{resulte.length === 0 ? "--" : resulte}
				</span>
			</h2>
		</>
	);
};
