import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import redPinImg from "../../assets/red-pin.png"; 
import greenPinImg from "../../assets/green-pin.png";
import yellowPinImg from "../../assets/yellow-pin.png";

function AlertsMapPanel({ pins }) {
    const egyptCenter = [26.8206, 30.8025];

    // 1. تعريف الأيقونات لـ Leaflet عشان يفهم إننا هنستخدم صور
    const icons = {
        red: new L.Icon({
            iconUrl: redPinImg,
            iconSize: [32, 40], // مقاس الأيقونة)
            iconAnchor: [16, 40], // النقطة اللي بتلمس الخريطة (نص العرض، والارتفاع كله)
            popupAnchor: [0, -40]
        }),
        green: new L.Icon({
            iconUrl: greenPinImg,
            iconSize: [32, 40],
            iconAnchor: [16, 40],
            popupAnchor: [0, -40]
        }),
        yellow: new L.Icon({
            iconUrl: yellowPinImg,
            iconSize: [32, 40],
            iconAnchor: [16, 40],
            popupAnchor: [0, -40]
        })
    };

    return (
        <div className="relative border border-[#8f8f8f] rounded-lg overflow-hidden" 
             style={{ width: '929px', height: '862px' }}>
            
            <MapContainer 
                center={egyptCenter} 
                zoom={6} 
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {/* 2. رسم الأيقونات بناءً على الـ tone المبعوت في الـ pins */}
                {pins && pins.map((pin, index) => (
                    <Marker 
                        key={index}
                        position={[pin.lat || (26 + index * 0.5), pin.lng || (30 + index * 0.5)]} 
                        icon={icons[pin.tone] || icons.red} // بيختار الأيقونة حسب اللون
                    >
                        <Popup>{pin.locationName || "Alert Location"}</Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* المربع الصغير (Legend) */}
            <div className="absolute bottom-6 right-6 bg-white/90 p-4 rounded-md border border-[#bfbfbf] shadow-md z-[1000] flex flex-col gap-3"
                 style={{ width: '185px', height: '124px' }}>
                <div className="flex items-center gap-2">
                    <img src={redPinImg} alt="red" className="w-5 h-6" />
                    <span className="text-xs font-bold text-[#1f1f1f]">Affected areas</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src={greenPinImg} alt="green" className="w-5 h-6" />
                    <span className="text-xs font-bold text-[#1f1f1f]">Safe places</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src={yellowPinImg} alt="yellow" className="w-5 h-6" />
                    <span className="text-xs font-bold text-[#1f1f1f]">Help reached here</span>
                </div>
            </div>
        </div>
    );
}

export default AlertsMapPanel;