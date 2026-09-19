import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { Header, Footer } from "@ui/layout";
import { CookieConfirm } from "@app/components";
import { StoreProvider } from "@lib/store/components";
import "@ui/styles/globals.css";

export const metadata: Metadata = {
	title: "IMA Pro Space",
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
		<html key={locale} lang={locale}>
			<body className={"antialiased relative"}>
				<NextIntlClientProvider messages={message}>
					<StoreProvider>
						<AntdRegistry>
							<Header />
							<main className='flex flex-col gap-20 items-center my-20 mx-8'>
								{children}
							</main>
							{/* <CookieConfirm /> */}
							<Footer />
						</AntdRegistry>
					</StoreProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
