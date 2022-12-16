import { Helmet } from 'react-helmet-async';
import Layout from '../../Layouts';

function LandingPage(): JSX.Element {
	return (
		<Layout>
			<Helmet>
				<title>Home | Olutunde Solabi</title>
			</Helmet>
			<section className="bg-black h-screen flex justify-center items-center text-white">
				<h1 className="text-4xl">Hello, I am Olutunde Solabi</h1>
			</section>
		</Layout>
	);
}

export default LandingPage;
