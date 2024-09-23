import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const PLACES = [
  { lat: 50.08025330059694, lng: 14.414347861165416 },
];

const MapContainer = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={10}
      initialCenter={{ lat: 50.08025330059694, lng: 14.414347861165416 }}
    >
      {
        PLACES.map((place, index) => (
          <Marker
            key={index}
            name={''}
            position={place}
          />
        ))
      }
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
})(MapContainer)