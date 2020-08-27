import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation + country.population;
    }
    return (
        <div>
            <h2>This is card {cart.length}</h2>
            <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;