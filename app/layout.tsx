import Footer from "./footer";
import "./globals.css";
import Navbar from "./navbar";

export const metadata = {
	title: "Olutunde Solabi",
	description: "Portfolio Website for Olutunde",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="no-scroll">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
