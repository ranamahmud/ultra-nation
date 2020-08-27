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
            This is card {cart.length}
        </div>
    );
};

export default Cart;