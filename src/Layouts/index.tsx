import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { containerVariantAnimation } from '../utilities/Animation';

type props = {
	children: React.ReactNode;
};
function Layout({ children }: props): JSX.Element {
	return (
		<motion.main
			initial="hidden"
			animate="visible"
			exit="exit"
			key="body"
			variants={containerVariantAnimation}
			className="flex flex-col overflow-x-hidden"
		>
			<Header />
			<div className="flex-grow">{children}</div>
			<Footer />
		</motion.main>
	);
}

export default Layout;
