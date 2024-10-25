import React, { useState, useEffect } from 'react';
import { initialVehicles } from './data';
import VehicleList from './components/VehicleList';
import FleetOverview from './components/FleetOverview';

const App = () => {
  const [vehicles, setVehicles] = useState(initialVehicles);

  // Battery simulation effect for real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prevVehicles =>
        prevVehicles.map(vehicle => {
          if (vehicle.status === "In Transit") {
            return {
              ...vehicle,
              battery: Math.max(vehicle.battery - 1, 0), // Decrease battery by 1%
              distanceTravelled: vehicle.distanceTravelled + 3,
            };
          } else if (vehicle.status === "Charging" && vehicle.battery < 100) {
            return { ...vehicle, battery: vehicle.battery + 10 }; // Increase battery by 10%
          }
          return vehicle;
        })
      );
    }, 10000); // Updates every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Fleet Management Dashboard</h1>
      <FleetOverview vehicles={vehicles} />
      <VehicleList vehicles={vehicles} setVehicles={setVehicles} />
    </div>
  );
};

export default App;
