"use client";

import { useTranslations } from "next-intl";

export const useStateBoxData = (): Array<{ title: string; text: string }> => {
	const t = useTranslations("StepsBoxData");

	return [
		{
			title: t("step_1.title"),
			text: t("step_1.text"),
		},
		{
			title: t("step_2.title"),
			text: t("step_2.text"),
		},
		{
			title: t("step_3.title"),
			text: t("step_3.text"),
		},
		{
			title: t("step_4.title"),
			text: t("step_4.text"),
		},
	];
};
