import React from 'react';

import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_JxPW0Fw2PH895rjAcJxfKyrW00jqqwKS8u';


    const onToken = token => {

        console.log(token);

        alert('Payment Succesful!');

    };


    return (

        <StripeCheckout


            label='Pay Now'

            name='HomeBuild Ltd.'

            billingAddress

            shippingAddress
            // https://i.ibb.co/D8cnz0H/steel.jpg

            image='https://svgshare.com/i/CUz.svg'

            description={`Your total is $${price}`}

            amount={priceForStripe}

            panelLabel='Pay Now'

            token={onToken}

            stripeKey={publishableKey}


        />

    )

 
}


export default StripeCheckoutButton;