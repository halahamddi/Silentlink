import { CircleMarker, GeoJSON, MapContainer, Popup, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import useNorthAfricaGeoData from '../../hooks/useNorthAfricaGeoData';

function NorthAfricaInteractiveMap({ pins }) {
	const { countries, viewBounds, geoJson, isLoading, errorMessage, markerTonesByCountryId } =
		useNorthAfricaGeoData(pins);
	const markerColorByTone = {
		red: '#e05044',
		yellow: '#f1b100',
		green: '#34a264',
	};

	return (
		<div className="relative h-full w-full">
			<MapContainer
				bounds={viewBounds}
				maxBounds={viewBounds}
				maxBoundsViscosity={1}
				minZoom={5}
				maxZoom={8}
				zoomControl
				className="h-full w-full"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{geoJson ? (
					<GeoJSON
						data={geoJson}
						style={() => ({
							color: '#2f4b2f',
							weight: 1.5,
							fillColor: '#b8d2a8',
							fillOpacity: 0.5,
						})}
					/>
				) : null}
				{countries.map((country) => (
					<CircleMarker
						key={country.id}
						center={country.center}
						radius={6}
						pathOptions={{
							color: markerColorByTone[markerTonesByCountryId[country.id]] || markerColorByTone.yellow,
							fillOpacity: 1,
							weight: 2,
						}}
					>
						<Tooltip direction="top" offset={[0, -4]} opacity={1} permanent>
							{country.name}
						</Tooltip>
						<Popup>{country.name}</Popup>
					</CircleMarker>
				))}
			</MapContainer>
			{isLoading ? (
				<div className="pointer-events-none absolute inset-0 z-[500] grid place-items-center bg-white/45 text-[length:var(--font-size-md)] font-semibold text-[#1f1f1f]">
					Loading North Africa map...
				</div>
			) : null}
			{errorMessage ? (
				<div className="pointer-events-none absolute inset-x-3 bottom-3 z-[500] rounded-[var(--radius-sm)] bg-[#fff5f5] px-3 py-2 text-[length:var(--font-size-sm)] font-semibold text-[#8a1f1f]">
					{errorMessage}
				</div>
			) : null}
		</div>
	);
}

export default NorthAfricaInteractiveMap;
