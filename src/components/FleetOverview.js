import React from 'react';

const FleetOverview = ({ vehicles }) => {
    const totalVehicles = vehicles.length;
    const inTransit = vehicles.filter(v => v.status === "In Transit").length;
    const charging = vehicles.filter(v => v.status === "Charging").length;
    const idle = vehicles.filter(v => v.status === "Idle").length;
    const averageBattery = vehicles.reduce((acc, v) => acc + v.battery, 0) / totalVehicles;

    return (
        <div>
            <h2>Fleet Overview</h2>
            <p>Total Vehicles: {totalVehicles}</p>
            <p>In Transit: {inTransit}</p>
            <p>Charging: {charging}</p>
            <p>Idle: {idle}</p>
            <p>Average Battery: {averageBattery.toFixed(2)}%</p>
        </div>
    );
};

export default FleetOverview;
