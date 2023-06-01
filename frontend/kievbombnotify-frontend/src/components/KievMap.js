import React from 'react';
import { ReactSVG } from 'react-svg';
import Map from '/kiev.svg';

export function KievMap(props) {
    return (
        <div>
            <div>
                <h1>Your React Component</h1>
                <ReactSVG src={Map} />
            </div>
        </div>
    );
}
