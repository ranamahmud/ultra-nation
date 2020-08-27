import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div>
            This is country{props.county.name}
        </div>
    );
};

export default Country;