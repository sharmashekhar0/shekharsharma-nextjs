import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Shekhar Sharma",
	description: "Hi, I am Shekhar Sharma.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark scrollbar-blue">
			<body className={poppins.className}>
				<NextTopLoader color="#F4C430" />
				{children}
			</body>
		</html>
	);
}
