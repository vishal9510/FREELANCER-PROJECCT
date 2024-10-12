const stripe = require('stripe')("sk_test_tR3PYbcVNZZ796tH88S4VQ2u");

const payment = async (req, res) => {
    const { amount, currency, paymentMethodId } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method: paymentMethodId,
            confirm: true,
        });

        res.json({ paymentIntent });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    payment,
}