import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = 0;

    return (
        <div>
            This is card {cart.length}
        </div>
    );
};

export default Cart;