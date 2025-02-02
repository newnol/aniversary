import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { MapPin } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibmV3bm9sIiwiYSI6ImNtNm4wbGlscDBjbzAydG83MW5sNWtxNjkifQ.x1vPOiLU8AY3er2JBk-xqQ';

const locations = [
  {
    id: 1,
    name: 'Nơi gặp nhau đầu tiên',
    date: '03/06/2022',
    description: 'Quán cafe nơi chúng ta lần đầu gặp gỡ',
    latitude: 10.8231,
    longitude: 106.6297,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800'
  },
  {
    id: 2,
    name: 'Nơi tỏ tình',
    date: '14/02/2023',
    description: 'Khoảnh khắc đáng nhớ khi nói lời yêu đầu tiên',
    latitude: 10.8000,
    longitude: 106.6500,
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800'
  }
];

const Journey = () => {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
  const [viewState, setViewState] = useState({
    longitude: 106.6297,
    latitude: 10.8231,
    zoom: 11
  });

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Hành trình của chúng ta
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="h-[600px] relative">
          <Map
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            {locations.map(location => (
              <Marker
                key={location.id}
                longitude={location.longitude}
                latitude={location.latitude}
                anchor="bottom"
                onClick={e => {
                  e.originalEvent.stopPropagation();
                  setSelectedLocation(location);
                }}
              >
                <MapPin className="w-8 h-8 text-pink-500 cursor-pointer hover:text-pink-600 transition-colors" />
              </Marker>
            ))}

            {selectedLocation && (
              <Popup
                longitude={selectedLocation.longitude}
                latitude={selectedLocation.latitude}
                anchor="bottom"
                onClose={() => setSelectedLocation(null)}
                closeButton={true}
                closeOnClick={false}
                className="max-w-sm"
              >
                <div className="p-2">
                  <img
                    src={selectedLocation.image}
                    alt={selectedLocation.name}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <h3 className="text-lg font-semibold">{selectedLocation.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{selectedLocation.date}</p>
                  <p className="text-sm">{selectedLocation.description}</p>
                </div>
              </Popup>
            )}
          </Map>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {locations.map(location => (
          <div
            key={location.id}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => {
              setSelectedLocation(location);
              setViewState({
                longitude: location.longitude,
                latitude: location.latitude,
                zoom: 14
              });
            }}
          >
            <div className="flex items-start gap-4">
              <img
                src={location.image}
                alt={location.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold">{location.name}</h3>
                <p className="text-sm text-gray-500">{location.date}</p>
                <p className="text-sm mt-1">{location.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;