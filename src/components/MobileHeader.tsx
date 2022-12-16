import { motion, AnimatePresence } from 'framer-motion';
import SideBar from '../components/SideBar';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { selectSideBarState, closeSideBar, openSideBar } from '../redux/sidebar/sidebar';
import { selectCurrentView } from '../redux/view/view';
import { ViewTypes } from '../types';
import { sideBarVariantAnimation } from '../utilities/Animation';
import DynamicHeroIcon from './DynamicIcon';

function MobileHeader(): JSX.Element {
	const sideBarState = useAppSelector(selectSideBarState);
	const view = useAppSelector(selectCurrentView);
	const dispatch = useAppDispatch();

	return (
		<nav className="bg-white border-b-2">
			<div
				className="w-full flex py-6 lg:hidden
                  fixed z-10 max-h-[74px] px-5 border justify-between bg-white"
			>
				<div></div>
				{view === ViewTypes.MOBILE && !sideBarState ? (
					<button
						type="button"
						onClick={() => (sideBarState ? dispatch(closeSideBar()) : dispatch(openSideBar()))}
					>
						<DynamicHeroIcon
							icon={sideBarState ? 'XMarkIcon' : 'Bars3Icon'}
							className="w-6 h-6 text-blue-500"
						/>
					</button>
				) : null}
				{view === ViewTypes.MOBILE && sideBarState ? (
					<div className="w-6">
						<button
							type="button"
							onClick={() => (sideBarState ? dispatch(closeSideBar()) : dispatch(openSideBar()))}
						>
							<DynamicHeroIcon
								icon={sideBarState ? 'XMarkIcon' : 'Bars3Icon'}
								className="w-6 h-6 text-blue-500"
							/>
						</button>
					</div>
				) : null}
			</div>
			{view === ViewTypes.MOBILE && (
				<AnimatePresence mode="wait">
					{sideBarState && (
						<motion.div
							initial="hidden"
							animate="visible"
							exit="exit"
							key="sideBar"
							variants={sideBarVariantAnimation}
							className="fixed top-0 right-0 bottom-0 left-0
                            w-full min-w-[240px] max-w-[240px] z-20 bg-white"
						>
							<SideBar />
						</motion.div>
					)}
				</AnimatePresence>
			)}
		</nav>
	);
}

export default MobileHeader;
