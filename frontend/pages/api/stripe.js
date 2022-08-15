import { Stripe } from 'stripe';
import { getSession } from '@auth0/nextjs-auth0';

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

const handler = async (req, res) => {
    const session = getSession(req, res);
    const user = session?.user;
    const stripeId = user['http://localhost:3000/stripe_customer_id'];

    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                submit_type: 'pay',
                mode: 'payment',
                customer: stripeId,
                payment_method_types: ['card'],
                shipping_address_collection: {
                    allowed_countries: ['GB', 'US', 'SE'],
                },
                allow_promotion_codes: true,
                shipping_options: [
                    { shipping_rate: 'shr_1LVtUWHlWD1zmfL25pPv4uzE' },
                    { shipping_rate: 'shr_1LVthjHlWD1zmfL2TDX0oXCW' },
                ],
                line_items: req.body.map((item) => {
                    return {
                        price_data: {
                            currency: 'gbp',
                            product_data: {
                                name: item.title,
                                images: [
                                    item.image.data.attributes.formats.thumbnail
                                        .url,
                                ],
                            },
                            unit_amount: item.price * 100,
                        },
                        quantity: item.quantity,
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                    };
                }),
                success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/cancelled`,
            });
            res.status(200).json(session);
        } catch (error) {
            res.status(error.statusCode || 500).json(error.message);
        }
    }
};

export default handler;
