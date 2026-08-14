import type { Metadata } from "next";
import { Header } from "@ui/layout";
import { StoreProvider } from "@lib/store/components";
import "@ui/styles/globals.css";

export const metadata: Metadata = {
	title: "Home",
	description: "Home Page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang='cz'>
			<body className={"min-h-full flex flex-col antialiased"}>
				<StoreProvider>
					<Header />
					<main className='flex flex-col gap-20 items-center my-20 mx-8'>
						{children}
					</main>
				</StoreProvider>
			</body>
		</html>
	);
}
