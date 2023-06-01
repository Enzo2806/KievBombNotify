import React from 'react';
import "./MapPage.css"
import { KievMap } from '../components/KievMap';

export function MapPage(props) {
    return (
        <div>
            <div>
                <h1>Map</h1>
                <KievMap />
            </div>
        </div>
    );
}