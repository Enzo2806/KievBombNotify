import React from 'react';
import "./ReportPage.css";
import { DropDown } from '../components/DropDown';
import { useNavigate } from 'react-router-dom';

export function ReportPage(props) {

    const navigate = useNavigate();
    const handleReportPress = (e) => {
        e.preventDefault();
        navigate('/map', { state: { reportMessage: 'Thank you for reporting!' } });
    }

    return (
        <div>
            <div>
                <h1>Report an Attack</h1>

                <div>
                    <DropDown />
                </div>

                <button className='report-button' onClick={handleReportPress}>
                    Report
                </button>

            </div>
        </div>
    );
}