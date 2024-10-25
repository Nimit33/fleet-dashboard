import React from 'react';

const VehicleList = ({ vehicles, setVehicles }) => {
    const removeVehicle = (id) => {
        setVehicles(vehicles.filter(v => v.id !== id));
    };

    return (
        <div>
            <h2>Vehicle List</h2>
            {vehicles.map(vehicle => (
                <div key={vehicle.id} style={{ border: '1px solid', padding: '10px', margin: '5px' }}>
                    <p>ID: {vehicle.id}</p>
                    <p>Battery: {vehicle.battery}%</p>
                    <p>Distance Travelled: {vehicle.distanceTravelled} km</p>
                    <p>Status: {vehicle.status}</p>
                    <button onClick={() => removeVehicle(vehicle.id)}>Remove Vehicle</button>
                </div>
            ))}
        </div>
    );
};

export default VehicleList;
