import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Codeo - Online Code Editor & Snippet Sharing",
	description:
		"Codeo is a powerful online code editor that supports multiple programming languages. Write, run, and share code snippets effortlessly with others.",
	applicationName: "Codeo",
	keywords: [
		"online code editor",
		"code sharing",
		"run code online",
		"multiple languages",
		"collaborative coding",
		"code snippets",
		"Codeo",
	],
	authors: [
		{ name: "Kirtiraj Thakor", url: "https://github.com/kirtiraj22" },
	],
	creator: "Kirtiraj Thakor",
	openGraph: {
		title: "Codeo - Online Code Editor & Snippet Sharing",
		description:
			"Codeo is a powerful online code editor that supports multiple programming languages. Write, run, and share code snippets effortlessly with others.",
		siteName: "Codeo",
		type: "website",
	},
	manifest: "/site.webmanifest",
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
				>
					<ConvexClientProvider>{children}</ConvexClientProvider>
					<Footer />

					<Toaster />
				</body>
			</html>
		</ClerkProvider>
	);
}
