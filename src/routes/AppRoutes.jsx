import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import AlertsPage from '../pages/AlertsPage';
import SettingsPage from '../pages/SettingsPage';
import SignInPage from '../pages/SignInPage';
import SosManagementPage from '../pages/SosManagementPage';
import { ROUTES } from '../utils/constants';

function AppRoutes() {
	return (
		<Routes>
			<Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.SIGN_IN} replace />} />
			<Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
			<Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
			<Route path={ROUTES.SOS_MANAGEMENT} element={<SosManagementPage />} />
			<Route path={ROUTES.ALERTS} element={<AlertsPage />} />
			<Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
			<Route path="*" element={<Navigate to={ROUTES.SIGN_IN} replace />} />
		</Routes>
	);
}

export default AppRoutes;
