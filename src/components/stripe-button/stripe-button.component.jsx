import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import CustomButton from '../custom-button/custom-button.component';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_diKnLYH74btekGhmTw7rW0iK00f11TsNfZ';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Best Webshop EU'
			currency='EUR'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is €${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
      stripeKey={publishableKey} >
        <CustomButton inverted>Pay with Card</CustomButton>
      </StripeCheckout>
		
	);
};

export default StripeCheckoutButton;
