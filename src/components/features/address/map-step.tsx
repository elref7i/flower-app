"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { LeafletMouseEvent } from "leaflet";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPinHouse } from "lucide-react"
import { useTranslations } from "next-intl"

//red icon 
const redIcon = L.icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  shadowUrl: "/assets/imgs/marker-shadow.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

type MapStepProps = {
  onSelect: (lat: number, lng: number) => void;
  initialCenter?: [number, number];
  initialZoom?: number;
};


function LocationPicker({ onSelect }: { onSelect: (lat: number, lng: number) => void }) {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useMapEvents({
    click(e: LeafletMouseEvent) {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      setPosition([lat, lng]);
      onSelect(lat, lng);
    },
  });

  return position ? <Marker position={position} icon={redIcon} /> : null;
}

export default function MapStep({
  onSelect,
  initialCenter = [30.0444, 31.2357],
  initialZoom = 13,
}: MapStepProps) {
  const [currentPosition, setCurrentPosition] = useState<[number, number] | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  //to find my location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setCurrentPosition([lat, lng]);
          onSelect(lat, lng);
        },
        (err) => {
          console.error("Geolocation error:", err);
        }
      );
    }
  }, [onSelect]);

  //translation
  const t = useTranslations("address")

  return (
    <div className="relative  w-full h-[349px]  rounded overflow-hidden border border-zinc-200">
      <MapContainer
        center={currentPosition || initialCenter}
        zoom={initialZoom}
        zoomControl={false}
        className="h-full w-full z-0"
        ref={mapRef}
      >

        {/*integrate with open street map*/}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {/*marker for my location*/}
        {currentPosition && <Marker position={currentPosition} icon={redIcon} />}
        <LocationPicker onSelect={onSelect} />
      </MapContainer>

      {/*button to find loacation*/}
      <Button
      type='button'
        onClick={() => {
          if (currentPosition && mapRef.current) {
            mapRef.current.setView(currentPosition, 15); // zoom لموقعي
            onSelect(currentPosition[0], currentPosition[1]);
          }
        }}
        className="absolute group flex gap-2.5 top-4 right-4 z-50  bg-white text-maroon-600 font-semibold px-3.5 py-2.5 border border-maroon-600 rounded-[10px] text-sm hover:text-white hover:bg-maroon-600 hover:border-white"
      >
        {/*icon*/}
        <MapPinHouse size={20}  className='stroke-current' />
        {t("find-my-location")}
      </Button>
    </div>
  );
}
