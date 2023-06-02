import React from 'react';
import districts from './DropDown.json';
import "./Status.scss"
export function Status(props) {


    return (
        <div className="row">
            {districts.map(district => (
                <>
                    <div className="col-sm-6 report">
                        <h4>DISTRICT: {district.value}</h4>
                        <h4>DANGER LEVEL:<span className={`${district.danger}`}> {district.danger}</span></h4>
                        <h4>REPORTS: {district.report}</h4>
                    </div>
                </>
            ))}
        </div>
    );
}




