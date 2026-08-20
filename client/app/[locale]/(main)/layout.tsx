import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Header, Footer } from "@ui/layout";
import { StoreProvider } from "@lib/store/components";
import "@ui/styles/globals.css";

export const metadata: Metadata = {
	title: "Home",
	description: "Home Page",
};

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	const message = await getMessages();

	return (
		<html lang={locale}>
			<body className={"min-h-full flex flex-col antialiased"}>
				<NextIntlClientProvider messages={message}>
					<StoreProvider>
						<Header />
						<main className='flex flex-col gap-20 items-center my-20 mx-8'>
							{children}
						</main>
						<Footer />
					</StoreProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
