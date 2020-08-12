const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(port, (err) => {
	if (err) throw err;
	console.log('Server running on port ' + port);
});

app.post('/payment', (req, res) => {
	stripe.customers
		.create({
			email: req.body.email,
			source: req.body.token.id,
		})
		.then((customer) =>
			stripe.charges.create({
				amount: req.body.amount,
				description: 'demo',
				currency: 'EUR',
				customer: customer.id,
			})
		)
		.then((charge) => res.status(200).send({ success: 'success' }));
});
