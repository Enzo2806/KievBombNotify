import React from 'react';
import Select from 'react-select';
import districts from './DropDown.json';
import "./DropDown.css";

export function DropDown(props) {

    return (
        <div>
            <Select className="select" options={districts} />
        </div>
    );
}




