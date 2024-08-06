'use client';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { ComponentHeading } from '../common/HeroHeding';
import { MapContent, Location } from '@/types/dynamicDataTypes/AboutContent';
interface content {}
const OurLocation = ({ Content }: MapContent) => {
  const [activeMarker, setActiveMarker] = useState<string | null | undefined>(
    Content?.Locations[0]?.id,
  );
  const [mapHeight, setMapHeight] = useState('718px');
  const [center, setcenter] = useState({
    lat: Content?.Locations[0]?.Latitude,
    lng: Content?.Locations[0]?.Longitude,
  });
  // location icon click handler
  const handleMarkerClick = (id: string, lat: number, lng: number) => {
    setActiveMarker(id);
    setcenter({ lat, lng });
  };

  // map styling
  const mapContainerStyle = {
    width: '100%',
    height: mapHeight,
    borderRadius: '20px 20px 0px 0px',
  };
  useEffect(() => {
    const updateMapHeight = () => {
      if (window.innerWidth < 640) {
        setMapHeight('343px');
      } else if (window.innerWidth < 1024) {
        setMapHeight('500px');
      } else {
        setMapHeight('718px');
      }
    };
    window.addEventListener('resize', updateMapHeight);
    updateMapHeight();

    return () => {
      window.removeEventListener('resize', updateMapHeight);
    };
  }, []);

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <section className="bg-primary25 md:3xl:py-[100px] 3xl:px-[120px] lg:p-20 sm:p-16 px-4 py-12 grid md:gap-16 gap-8">
      <ComponentHeading heading="Our Locations" />
      <div className="w-full h-full rounded-[20px] overflow-hidden border border-gray200">
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
          >
            {Content?.Locations.map((location: Location, index: number) => (
              <Marker
                key={index}
                position={{ lat: location.Latitude, lng: location.Longitude }}
                onClick={() =>
                  handleMarkerClick(
                    location.id!,
                    location?.Latitude,
                    location?.Longitude,
                  )
                }
                icon={
                  activeMarker === location.id
                    ? '/Images/map/locationFill.svg'
                    : '/Images/map/location.svg'
                }
              />
            ))}
          </GoogleMap>
        </LoadScript>

        {/* address-list*/}
        <div className="flex flex-col md:flex-row md:overflow-auto bg-white ">
          {Content?.Locations?.map((location: Location, index: number) => (
            <div
              key={index}
              className={`md:px-8 md:py-6 py-2 px-4 md:text-center min-w-[339px] border-r-2 border-r-[#E4E7EC] cursor-pointer  gap-1 md:gap-0 xs:grid  ${
                activeMarker === location?.id
                  ? 'text-primary600 bg-primary50 '
                  : ''
              }`}
              onClick={() =>
                handleMarkerClick(
                  location?.id!,
                  location?.Latitude,
                  location?.Longitude,
                )
              }
            >
              <span className="text-map text-gary900 block">
                {location?.PlaceName}
              </span>
              <span className="text gray600 line-clamp-2">
                {location?.ExactLocation}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
