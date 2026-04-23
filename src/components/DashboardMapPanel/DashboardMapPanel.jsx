import NorthAfricaInteractiveMap from './NorthAfricaInteractiveMap';

function DashboardMapPanel({ pins }) {
	return (
		<section className="relative min-h-[250px] overflow-hidden rounded-[var(--radius-sm)] bg-[#e7ecf4] sm:min-h-[320px] xl:min-h-[395px]">
			<div className="absolute inset-0">
				<NorthAfricaInteractiveMap pins={pins} />
			</div>
		</section>
	);
}

export default DashboardMapPanel;
