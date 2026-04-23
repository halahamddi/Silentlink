import { useNavigate } from 'react-router-dom';
import AlertDetailsPanel from '../components/AlertDetailsPanel';
import DashboardSidebar from '../components/DashboardSidebar';
import SosManagementTable from '../components/SosManagementTable';
import SosStatusSummary from '../components/SosStatusSummary';
import useSosManagementData from '../hooks/useSosManagementData';
import { ROUTES, SOS_MANAGEMENT_CONTENT } from '../utils/constants';
import React, { useState } from 'react'; 

function SosManagementPage() {
	const navigate = useNavigate();
	const { sosManagementData } = useSosManagementData();
    const [selectedAlert, setSelectedAlert] = useState(sosManagementData.alertRows)
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
      console.log(sosManagementData.alertRows);
return (
		<main className="min-h-screen bg-[var(--color-page-bg)] p-3 sm:p-4 md:p-6 lg:p-8">
			<div className="mx-auto max-w-[1500px]">
				<h1 className="mb-3 text-[length:var(--font-size-xl)] font-semibold text-[#2f2f2f] md:text-[length:var(--font-size-2xl)]">
					sos mangement
				</h1>
				<section className="grid gap-4 rounded-[var(--radius-lg)] bg-[#dfdfdf] p-3 sm:p-4 md:p-5 xl:grid-cols-[265px_1fr]">
					<DashboardSidebar
						menuItems={sosManagementData?.menuItems}
						activeMenuIndex={1}
						onSelectMenuItem={handleSidebarSelect}
						onSelectFooterItem={handleFooterSelect}
					/>
					<div className="space-y-4">
						<h2 className="m-0 border-b border-[#b5b5b5] pb-2 text-[length:var(--font-size-2xl)] font-semibold text-[#1f1f1f] md:text-[length:2rem]">
							{SOS_MANAGEMENT_CONTENT.title}
						</h2>
						<SosStatusSummary items={sosManagementData?.statusSummary} />
						
						<div className="grid gap-4 xl:grid-cols-[1fr_265px]">
							{/* التعديل هنا: بعتنا الـ onClick والـ selectedId للجدول */}
							<SosManagementTable
								columns={SOS_MANAGEMENT_CONTENT.columns}
								historyRows={sosManagementData?.alertRows}
								onRowClick={(row) => setSelectedAlert(row)} 
								selectedId={selectedAlert?.alertId}
							/>

							{/* التعديل هنا: الـ Aside بيعرض الـ selectedAlert لو موجود، ولو مش موجود بيعرض رسالة */}
							{selectedAlert ? (
								<AlertDetailsPanel
									title="Alert Details"
									details={selectedAlert}
								/>
							) : (
								<div className="bg-white p-6 rounded-lg text-center text-gray-400 flex items-center justify-center border-2 border-dashed border-gray-200">
									اضغطي على أي اسم في الجدول لعرض التفاصيل
								</div>
							)}
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default SosManagementPage;
