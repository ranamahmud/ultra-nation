import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population} = props.country
    return (
        <div>
            <h4>This is a {name}</h4>
        </div>
    );
};

export default Country;