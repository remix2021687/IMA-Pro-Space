"use clinet";

import { useTranslations } from "next-intl";
import { useAppSelector } from "@lib/store/hooks";

export const B2BSelected: React.FC = () => {
	const t = useTranslations("B2BSelected");
	const SelectedState = useAppSelector((state) => state.B2BSlice.selectedBox);

	const resulte = SelectedState.map((item) => item).join(" + ");

	return (
		<>
			<h2 className='text-[18px] text-[#484551] font-medium'>
				{t("h2_text")}:{" "}
				<span className='text-[#20026E] font-bold'>
					{resulte.length === 0 ? "--" : resulte}
				</span>
			</h2>
		</>
	);
};
