function DashboardPiePanel() {
	return (
		/* 1. rounded-none عشان الحواف تكون حادة */
		/* 2. mt-8 عشان ننزله لتحت شوية عن اللي فوقه */
		<section className="w-[320px] h-[220px] rounded-none bg-white p-6 shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden mt-10">
			
			<div className="flex flex-row items-center justify-between w-full gap-4">
				
				{/* الدائرة */}
				<div className="relative h-[130px] w-[130px] flex-shrink-0 rounded-full bg-[conic-gradient(#49987A_0deg_180deg,#DCEEC4_180deg_288deg,#89B791_288deg_342deg,#C5D5B9_342deg_360deg)]">
					<div className="absolute inset-[30%] rounded-full bg-white" />
				</div>

				{/* الكلام مترحل يمين */}
				<div className="flex flex-col space-y-2 flex-1 ml-4">
					<div className="flex items-center gap-2">
						<span className="h-3 w-3 rounded-full bg-[#49987A] flex-shrink-0" />
						<span className="text-[11px] font-bold text-[#636363] whitespace-nowrap">total sos</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="h-3 w-3 rounded-full bg-[#DCEEC4] flex-shrink-0" />
						<span className="text-[11px] font-bold text-[#636363] whitespace-nowrap">ended sos</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="h-3 w-3 rounded-full bg-[#89B791] flex-shrink-0" />
						<span className="text-[11px] font-bold text-[#636363] whitespace-nowrap">running sos</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="h-3 w-3 rounded-full bg-[#C5D5B9] flex-shrink-0" />
						<span className="text-[11px] font-bold text-[#636363] whitespace-nowrap">pending sos</span>
					</div>
				</div>

			</div>
		</section>
	);
}

export default DashboardPiePanel;