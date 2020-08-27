import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population, region} = props.country
    return (
        <div>
            <h4>This is a {name}</h4>
            <p>population: {population}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;