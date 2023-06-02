import React from 'react';
import Select from 'react-select';
import districts from './DropDown.json';
import "./DropDown.css";

export function DropDown(props) {

    const styles = {
        menu: ({ width, ...css }) => ({
            ...css,
            width: "max-content",
            minWidth: "100%"
       }),
    }

    return (
        <div>
            <Select className="select" options={districts} styles={styles}/>
        </div>
    );
}




