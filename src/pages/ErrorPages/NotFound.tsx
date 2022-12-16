import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DynamicHeroIcon from "../../components/DynamicIcon";

function NotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title> Not Found | Olutunde Solabi</title>
      </Helmet>
      <div className="h-screen w-screen bg-gray-100 flex items-center">
        <div
          className="w-full flex flex-col-reverse
                     items-center 
            justify-center px-5 text-gray-700"
        >
          <div className="max-w-md text-center">
            <h1 className="text-5xl font-dark font-bold">404</h1>
            <h2
              className="text-2xl md:text-3xl font-light mt-2 
                    leading-normal"
            >
              Sorry looks like this page doesn&apos;t exist{" "}
            </h2>
            <p className="mb-8 mt-2">
              But don&apos;t worry, you can find plenty of other things on my
              homepage.
            </p>

            <Link
              to="/"
              className="px-4 inline py-2 text-sm font-medium 
                    leading-5 shadow text-white transition-colors duration-150 
                    border border-transparent rounded-lg focus:outline-none
                     focus:shadow-outline-blue bg-blue-600 
                     active:bg-blue-600
                      hover:bg-blue-700"
            >
              Back to homepage
            </Link>
          </div>
          <div className="max-w-lg mb-5">
            <DynamicHeroIcon
              className="w-24 h-24 text-yellow-500"
              icon="ExclamationTriangleIcon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
