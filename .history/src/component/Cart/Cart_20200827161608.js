import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    cart totalPopulation = cart.reduce((totalPopulation, country) => totalPopulation + country.population), 0);
    return (
        <div>
            <h2>This is card {cart.length}</h2>
            <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;