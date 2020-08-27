import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population, region,flag} = props.country
    return (
        <div>
            <h4>This is a {name}</h4>
            <p>population: {population}</p>
            <p><small>Region: {region}</small></p>
            <img src={flag} alt=""/>
        </div>
    );
};

export default Country;