import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
	locales: ["cz", "ru"],
	defaultLocale: "cz",
});

export const { Link, redirect, usePathname, useRouter } =
	createNavigation(routing);
