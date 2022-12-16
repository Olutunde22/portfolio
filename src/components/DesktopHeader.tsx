import DynamicHeroIcon from './DynamicIcon';
import { NavBar } from '../utilities/navItems';
import { NavLink } from 'react-router-dom';

function DesktopHeader(): JSX.Element {
	return (
		<nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
			<div className="flex justify-between ">
				<NavLink to="/" className="flex space-x-3 items-center">
					<DynamicHeroIcon icon="CommandLineIcon" className="h-8 w-8" />
					<h1 className=" font-normal text-2xl leading-6 text-gray-800">Olutunde</h1>
				</NavLink>
				<div className="flex flex-row space-x-4">
					<div className="hidden sm:block my-auto ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12">
						<div className="flex items-center space-x-4">
							{NavBar.map((nav) => (
								<NavLink
									to={nav.path}
									key={nav.name}
									className={`px-3 py-2 rounded-md text-sm font-medium ${
										location.pathname === nav.path
											? 'underline decoration-blue-600 decoration-2 underline-offset-8'
											: ''
									}`}
									aria-current={location.pathname === nav.path ? 'page' : undefined}
								>
									{nav.name}
								</NavLink>
							))}
							<button
								className="py-3 px-8 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded transition duration-200 whitespace-nowrap"
								type="button"
							>
								Contact Me
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default DesktopHeader;
