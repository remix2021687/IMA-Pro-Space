import type { Metadata } from "next";
import { Header } from "@ui/layout";
import "./globals.css";

export const metadata: Metadata = {
	title: "Home",
	description: "Home Page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang='en'>
			<body className='min-h-full flex flex-col'>
				<Header />
				{children}
			</body>
		</html>
	);
}
