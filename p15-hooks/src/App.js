import { useEffect, useState } from 'react';

function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const handlePositionReceived = ({ coords }) => {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  };

  return (
    <>
      Latitude: {location.latitude} <br />
      longitude: {location.longitude}
    </>
  );
}

export default App;
