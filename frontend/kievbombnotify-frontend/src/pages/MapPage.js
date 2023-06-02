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
                <div className='legend'>
                        <div className="legend-item">
                            <div className="legend-color" style={{ backgroundColor: '#FD585E', opacity: 1 }}></div>
                            <div className="legend-label">Severe Possibility of Attack</div>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color" style={{ backgroundColor: '#F4B609', opacity: 1 }}></div>
                            <div className="legend-label">High Possibility of Attack</div>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color" style={{ backgroundColor: '#242424', opacity: 1 }}></div>
                            <div className="legend-label">Low Possibility of Attack</div>
                        </div>
                </div>
            </div>
        </div>
    );
}