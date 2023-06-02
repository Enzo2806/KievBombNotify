import React from 'react';
import "./MapPage.css"
import { KievMap } from '../components/KievMap';

export function MapPage(props) {
    return (
        <div>
            <div>
                <div className='map-title'> 
                    <div id="circle"></div>
                    <h1 className='title'> Live Kiev Map</h1>  
                </div>
                <KievMap />
            </div>
        </div>
    );
}