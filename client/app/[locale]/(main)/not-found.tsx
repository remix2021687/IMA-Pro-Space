import { Metadata } from "next";

import { NotFoundPage } from "@ui/layout";

export const metadata: Metadata = {
	title: "Page not found | 404",
};

export default function NotFound() {
	return <NotFoundPage />;
}
