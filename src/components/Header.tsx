import { useAppSelector } from '../redux/hooks';
import { selectCurrentView } from '../redux/view/view';
import { ViewTypes } from '../types';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

function Header(): JSX.Element {
	const view = useAppSelector(selectCurrentView);

	return (
		<header>
			{view === ViewTypes.MOBILE ? <MobileHeader /> : <DesktopHeader />}
		</header>
	);
}

export default Header;
