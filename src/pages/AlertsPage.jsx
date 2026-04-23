import { useNavigate } from 'react-router-dom';
import AlertsMapPanel from '../components/AlertsMapPanel';
import DashboardSidebar from '../components/DashboardSidebar';
import useAlertsData from '../hooks/useAlertsData';
import { ALERTS_CONTENT, ROUTES } from '../utils/constants';

function AlertsPage() {
	const navigate = useNavigate();
	const { alertsData } = useAlertsData();

	function handleSidebarSelect(index) {
		if (index === 0) {
			navigate(ROUTES.DASHBOARD);
			return;
		}

		if (index === 1) {
			navigate(ROUTES.SOS_MANAGEMENT);
			return;
		}

		if (index === 2) {
			navigate(ROUTES.ALERTS);
		}
	}

	function handleFooterSelect(item) {
		if (item === 'settings') {
			navigate(ROUTES.SETTINGS);
			return;
		}

		if (item === 'logout') {
			navigate(ROUTES.SIGN_IN);
		}
	}

	return (
		<main className="min-h-screen bg-[var(--color-page-bg)] p-3 sm:p-4 md:p-6 lg:p-8">
			<div className="mx-auto max-w-[1520px]">
				
				<section className="grid gap-4 rounded-[var(--radius-lg)] bg-[#dfdfdf] p-3 sm:p-4 md:p-5 xl:grid-cols-[265px_1fr]">
					<DashboardSidebar
						menuItems={alertsData.menuItems}
						activeMenuIndex={2}
						onSelectMenuItem={handleSidebarSelect}
						onSelectFooterItem={handleFooterSelect}
					/>
					<div className="flex flex-col flex-1">
    {/* الجزء الخاص بالعنوان والخطوط */}
    <div className="w-full border-t border-b border-[#b5b5b5] py-2 mb-4">
        <h2 className="m-0 text-[length:var(--font-size-2xl)] font-semibold text-[#1f1f1f] md:text-[length:2rem]">
            Map management
        </h2>
    </div>

    {/* هنا هتيجي الخريطة بعدين */}
    <div className="flex-1 rounded-xl overflow-hidden border border-white shadow-sm bg-white">
        <AlertsMapPanel pins={alertsData.mapPins} />
    </div>
</div>
				</section>
			</div>
		</main>
	);
}

export default AlertsPage;
