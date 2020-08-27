import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population} = props.country
    return (
        <div>
            {name} {population}
        </div>
    );
};

export default Country;