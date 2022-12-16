/* eslint-disable max-len */
import { NavLink, useLocation, Link } from 'react-router-dom';
import { NavBar } from '../utilities/navItems';
import DynamicHeroIcon from './DynamicIcon';

function SideBar(): JSX.Element {
	const location = useLocation();

	return (
		<div
			className="
        relative transition-all duration-300 min-h-screen border-y-0
        max-h-screen overflow-y-auto border border-gray-200"
		>
			<div className="w-full h-full">
				<div className="flex mt-6 mb-2 py-5 w-full">
					<Link
						to="/admin/dashboard"
						className="w-[70%] mx-auto text-center italic font-[900] text-xl leading-5 text-gray-300"
					></Link>
				</div>
				<ul className="flex flex-wrap">
					{NavBar.map((nav) => (
						<li
							key={nav.name}
							className="w-full hover:bg-portfolio-500
                           ease-in duration-300 hover:text-white"
						>
							<NavLink
								to={nav.path}
								className={`flex items-center px-7 py-5 ${
									location.pathname === nav.path ? 'bg-blue-500 text-white' : ''
								}`}
							>
								<DynamicHeroIcon icon={nav.icon} className="h-6 w-6 mr-4" />
								<span>{nav.name}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default SideBar;
