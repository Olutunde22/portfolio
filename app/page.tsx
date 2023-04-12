import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "../components/landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between px-6 md:px-12 lg:px-24">
			<Landing />
		</main>
	);
}
