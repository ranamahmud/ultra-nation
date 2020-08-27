import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population, region,flag} = props.country
    const countryStyle ={border: '1px solid red', margin: '10px', padding: '10px'}
    return (
        <div>
            <h4>This is a {name}</h4>
            <p>population: {population}</p>
            <p><small>Region: {region}</small></p>
            <img id="flag" src={flag} alt=""/>
        </div>
    );
};

export default Country;