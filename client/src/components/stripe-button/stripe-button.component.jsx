import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { checkoutSuccess } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({price, checkoutSuccess}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_EX0B59LIjR1Zgl6uvVJGtCfS00dZQra5Qx';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
            checkoutSuccess();
        }).catch(error => {
            console.log('Payment error: ', error.response);
            alert(
                'There was an issue with your payment. Please make sure you use the provided credit card.'
            );
        })
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapDispatchToProps = dispatch => ({
    checkoutSuccess: () => dispatch(checkoutSuccess())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);