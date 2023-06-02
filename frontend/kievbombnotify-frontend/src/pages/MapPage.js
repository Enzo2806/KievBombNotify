import React, { useState, useEffect } from 'react';
import "./MapPage.css"
import { KievMap } from '../components/KievMap';
import { useNavigate, useLocation } from 'react-router-dom';
import { Status } from '../components/Status';
import { Legend } from '../components/Legend';

export function MapPage(props) {
    const location = useLocation();
    const [reportMessage, setReportMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const navigate = useNavigate();
    const handleReportPress = (e) => {
        e.preventDefault();
        navigate('/report');
    }
    // Effects for showing the report thank you message
    useEffect(() => {
        const timer = setTimeout(() => {
            setReportMessage('');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const incomingMessage = location?.state?.reportMessage;
        if (incomingMessage) {
            setReportMessage(incomingMessage);
            setShowMessage(true);
        }
    }, [location]);


    return (
        <div className="container">
            <div style={{ display: 'flex' }}>
                <div>
                    <div className='map-title'>
                        <div id="circle"></div>
                        <h1 className='title'> Live Kiev Map</h1>
                    </div>
                    <KievMap />
                    <Legend />
                </div>
                <div className="col report-container">
                    <h1 className='title'> District Status</h1>
                    <div className="district-status row d-flex">
                        <Status />
                    </div>
                    <div>
                        <div>
                            <button className='report-button' onClick={handleReportPress}>
                                Report an Attack
                            </button>
                        </div>
                        <div className={`message-container ${showMessage ? 'show' : ''}`}>
                            {reportMessage && <p>{reportMessage}</p>}
            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}