import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import { useState, useEffect, useCallback } from "react";
import "../map.css"

const Map = ({ markers, title }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();

  const [map, setMap] = useState(null)
  const onLoad = useCallback((map) => setMap(map), [])

  useEffect(() => {
    if (map) {
      setIsOpen(false)
      const bounds = new window.google.maps.LatLngBounds();
      markers.map(marker => {
        bounds.extend({
          lat: marker.lat,
          lng: marker.lng,
        });
      });
      map.fitBounds(bounds);
    }
  }, [map, markers]);

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };

  return (
    <div className="Map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
        <h2>Showing Activities in {title}</h2>
        <GoogleMap
          mapContainerClassName="map-container"
          onLoad={onLoad}
          onClick={() => setIsOpen(false)}
        >
            {markers.map(({ address, lat, lng }, ind) => (
            <Marker
              key={ind}
              icon={"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address);
              }}
            >
              {isOpen && infoWindowData?.id === ind && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <h3>{infoWindowData.address}</h3>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
        </>
      )}
    </div>
  );
};

export default Map;

//copenhagen erro - try to recreate (anchor); 