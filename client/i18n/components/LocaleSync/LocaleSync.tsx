"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { setLocale } from "@lib/store/slice/i18nSlice/i18nSlice";
import { useAppDispatch } from "@lib/store/hooks";

export const LocaleSync: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const dispatch = useAppDispatch();
	const locale = useLocale();

	useEffect(() => {
		dispatch(setLocale(locale));
	}, [dispatch, locale]);

	return <>{children}</>;
};
