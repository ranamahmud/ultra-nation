import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div>
            This is country{props.country.name}
        </div>
    );
};

export default Country;