import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population} = props.country
    return (
        <div>
            {props.country.name}
        </div>
    );
};

export default Country;