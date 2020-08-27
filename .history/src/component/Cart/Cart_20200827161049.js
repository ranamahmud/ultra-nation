import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            This is card {props.cart}
        </div>
    );
};

export default Cart;