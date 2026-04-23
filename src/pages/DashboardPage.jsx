import { useNavigate } from 'react-router-dom';
import DashboardChartPanel from '../components/DashboardChartPanel/DashboardChartPanel';
import DashboardFilterGroup from '../components/DashboardFilterGroup/DashboardFilterGroup';
import DashboardMapLegend from '../components/DashboardMapLegend/DashboardMapLegend';
import DashboardMapPanel from '../components/DashboardMapPanel/DashboardMapPanel';
import DashboardPiePanel from '../components/DashboardPiePanel/DashboardPiePanel';
import DashboardSidebar from '../components/DashboardSidebar/DashboardSidebar';
import DashboardStatCard from '../components/DashboardStatCard/DashboardStatCard';
import SosHistoryPanel from '../components/SosHistoryPanel/SosHistoryPanel';
import useDashboardData from '../hooks/useDashboardData';
import { DASHBOARD_CONTENT, ROUTES } from '../utils/constants';

function DashboardPage() {
	const navigate = useNavigate();
	const { activeFilter, setActiveFilter, dashboardData } = useDashboardData();

	// 1. تجهيز البيانات لكل فلتر (Daily, Weekly, Monthly)
	const allDataByFilter = {
		'daily': {
			tableTitle: "This day",
			stats: [
				{ title: "Total SOS", value: "50", subtitle: "On this day" },
				{ title: "Ended SOS", value: "30", subtitle: "On this day" },
				{ title: "Running SOS", value: "15", subtitle: "On this day" },
				{ title: "Pending SOS", value: "5", subtitle: "On this day" }
			],
			history: [
				{ alertId: 1, name: "Malak Khaled", status: "Pending", emergencyType: "Medical" },
				{ alertId: 2, name: "Amira Ahmed", status: "Resolved", emergencyType: "Fire" },
				{ alertId: 3, name: "Nour Youssef", status: "Resolved", emergencyType: "Accident" },
				{ alertId: 4, name: "Reem Mostafa", status: "Pending", emergencyType: "Natural Disaster" },
				{ alertId: 5, name: "Jana Hamed", status: "Resolved", emergencyType: "Military Attack" },
			]
		},
		'weekly': {
			tableTitle: "This week",
			stats: [
				{ title: "Total SOS", value: "700", subtitle: "On this week" },
				{ title: "Ended SOS", value: "600", subtitle: "On this week" },
				{ title: "Running SOS", value: "75", subtitle: "On this week" },
				{ title: "Pending SOS", value: "25", subtitle: "On this week" }
			],
			history: [
				{ alertId: 1, name: "Malak Khaled", status: "Pending", emergencyType: "Medical" },
				{ alertId: 2, name: "Amira Ahmed", status: "Resolved", emergencyType: "Fire" },
				{ alertId: 3, name: "Nour Youssef", status: "Resolved", emergencyType: "Accident" },
				{ alertId: 4, name: "Reem Mostafa", status: "Pending", emergencyType: "Natural Disaster" },
				{ alertId: 5, name: "Jana Hamed", status: "Resolved", emergencyType: "Military Attack" },
			]
		},
		'monthly': {
			tableTitle: "This month",
			stats: [
				{ title: "Total SOS", value: "4000", subtitle: "On this month" },
				{ title: "Ended SOS", value: "3900", subtitle: "On this month" },
				{ title: "Running SOS", value: "60", subtitle: "On this month" },
				{ title: "Pending SOS", value: "40", subtitle: "On this month" }
			],
			history: [
				{ alertId: 1, name: "Malak Khaled", status: "Pending", emergencyType: "Medical" },
				{ alertId: 2, name: "Amira Ahmed", status: "Resolved", emergencyType: "Fire" },
				{ alertId: 3, name: "Nour Youssef", status: "Resolved", emergencyType: "Accident" },
				{ alertId: 4, name: "Reem Mostafa", status: "Pending", emergencyType: "Natural Disaster" },
				{ alertId: 5, name: "Jana Hamed", status: "Resolved", emergencyType: "Military Attack" },
			]
		}
	};

	const currentData = allDataByFilter[activeFilter] || allDataByFilter['daily'];

	function handleSidebarSelect(index) {
		if (index === 0) navigate(ROUTES.DASHBOARD);
		if (index === 1) navigate(ROUTES.SOS_MANAGEMENT);
		if (index === 2) navigate(ROUTES.ALERTS);
	}

	function handleFooterSelect(item) {
		if (item === 'settings') navigate(ROUTES.SETTINGS);
		if (item === 'logout') navigate(ROUTES.SIGN_IN);
	}

	return (
    /* 1. رجعنا نفس الـ Background والـ Padding بتاع الصفحات التانية بالظبط */
    <main className="min-h-screen bg-[var(--color-page-bg)] p-3 sm:p-4 md:p-6 lg:p-8 overflow-x-hidden">
        
        /* 2. استخدمنا نفس الـ Max Width اللي في الصور (1500px) */
        <div className="mx-auto max-w-[1650px] w-full">
            
            {/* 3. العنوان بنفس تنسيق Management Page */}
            <h1 className="mb-3 text-[length:var(--font-size-xl)] font-semibold text-[#2f2f2f] md:text-[length:var(--font-size-2xl)]">
                {DASHBOARD_CONTENT.title}
            </h1>

            {/* 4. الـ Section واخد نفس الـ bg الرمادي والـ Padding عشان يبقوا كلهم طقم واحد */}
            <section className="grid gap-4 rounded-[var(--radius-lg)] bg-[#dfdfdf] p-3 sm:p-4 md:p-5 xl:grid-cols-[240px_1fr]">
                
                <DashboardSidebar
                    menuItems={dashboardData.menuItems}
                    activeMenuIndex={0}
                    onSelectMenuItem={handleSidebarSelect}
                    onSelectFooterItem={handleFooterSelect}
                />

                <div className="space-y-4">
                    <DashboardFilterGroup
                        options={DASHBOARD_CONTENT.filterOptions}
                        activeValue={activeFilter}
                        onChange={setActiveFilter}
                    />

                    {/* كروت الإحصائيات (الـ grid-cols-4 هي اللي هتظبط الـ Pending) */}
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {currentData.stats.map((stat, index) => (
                            <DashboardStatCard
                                key={stat.title}
                                title={stat.title}
                                value={stat.value}
                                subtitle={stat.subtitle}
                                active={index === 0}
                            />
                        ))}
                    </div>

                    {/* الخريطة والـ Charts */}
                    <div className="grid gap-4 xl:grid-cols-[1fr_370px]">
                        <div className="space-y-4">
                            <DashboardMapPanel pins={dashboardData.mapPins} />
                            <div className="grid gap-4 lg:grid-cols-[230px_1fr]">
                                <DashboardMapLegend items={DASHBOARD_CONTENT.legendItems} />
                                <SosHistoryPanel 
                                    historyRows={currentData.history}
                                    title={currentData.tableTitle} 
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <DashboardChartPanel />
                            <DashboardPiePanel />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
);
}

export default DashboardPage;