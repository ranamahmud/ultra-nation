import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div>
            {props.country.name}
        </div>
    );
};

export default Country;