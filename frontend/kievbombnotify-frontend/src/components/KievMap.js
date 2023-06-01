import React from 'react';
import { MapSVG } from './mapSVG';

const handleClick = (areaName) => {
    console.log("Clicked on:", areaName);
};

export function KievMap(props) {
    return (
        <div>
            <MapSVG />
        </div>
    );
}
