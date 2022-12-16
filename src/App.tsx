import { Suspense, useEffect, useCallback, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LandingPage, NotFound } from './Routes';
import { useAppDispatch } from './redux/hooks';
import { closeSideBar } from './redux/sidebar/sidebar';
import { setToMobile, setToDesktop } from './redux/view/view';
import Loading from './components/Loading';

function App(): JSX.Element {
	const dispatch = useAppDispatch();
	const location = useLocation();

	const detectSize = useCallback((): void => {
		dispatch(closeSideBar());
		if (window.innerWidth >= 1024) {
			dispatch(setToDesktop());
		} else {
			dispatch(setToMobile());
		}
	}, [dispatch]);

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	useEffect(() => {
		window.addEventListener('resize', detectSize);
		return () => {
			window.removeEventListener('resize', detectSize);
		};
	}, [detectSize]);

	detectSize();

	return (
		<Suspense fallback={<Loading />}>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<LandingPage />} />

					{/* Error Routes */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AnimatePresence>
		</Suspense>
	);
}

export default App;
