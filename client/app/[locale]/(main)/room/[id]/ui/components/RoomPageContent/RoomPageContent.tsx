import { useTranslations } from "next-intl";
import { useState } from "react";
import {
	ServiceContent,
	ServiceFrom,
	ServiceFromCompleted,
} from "./components";
import { useAppSelector } from "@lib/store/hooks";

export const RoomPageContent: React.FC = () => {
	const t = useTranslations("ServiceContent");
	const ServiceState = useAppSelector((state) => state.RoomPageSlice.service);
	const [LoadingComplited, setLoadingComplited] = useState(false);

	const setState = (e: boolean) => {
		setLoadingComplited(e);
	};

	return (
		<section className='flex flex-row max-md:flex-col max-md:gap-20 max-md:w-full'>
			<section className='flex flex-col gap-10 w-1/4 max-md:w-full'>
				<ServiceContent title={t("step_1")} data={ServiceState.content} />
				<ServiceContent title={t("step_2")} data={ServiceState.equipment} />
			</section>
			{LoadingComplited ? (
				<ServiceFromCompleted />
			) : (
				<ServiceFrom onSendState={setState} />
			)}
		</section>
	);
};
