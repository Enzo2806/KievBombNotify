import React from 'react';
import "./Legend.css"

export function Legend(props) {
    return(
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
    )
}