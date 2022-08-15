import Stripe from 'stripe';
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
import { getSession } from '@auth0/nextjs-auth0';

export default async function handler(req, res) {
    const getUser = getSession(req, res);
    const user = getUser?.user;
    console.log(user);
    if (user) {
        const stripeId = user['http://localhost:3000/stripe_customer_id'];
        if (req.method === 'POST') {
            try {
                // Create Checkout Sessions from body params.
                const session = await stripe.checkout.sessions.create({
                    submit_type: 'pay',
                    mode: 'payment',
                    payment_method_types: ['card'],
                    customer: stripeId,
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
                                        item.image.data.attributes.formats
                                            .thumbnail.url,
                                    ],
                                },
                                unit_amount: item.price * 100,
                            },
                            adjustable_quantity: {
                                enabled: true,
                                minimum: 1,
                            },
                            quantity: item.quantity,
                        };
                    }),
                    success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${req.headers.origin}/cancelled`,
                });
                res.status(200).json(session);
            } catch (err) {
                res.status(err.statusCode || 500).json(err.message);
            }
        } else {
            res.setHeader('Allow', 'POST');
            res.status(405).end('Method Not Allowed');
        }
    } else {
        console.log('nope');
        if (req.method === 'POST') {
            try {
                // Create Checkout Sessions from body params.
                const session = await stripe.checkout.sessions.create({
                    submit_type: 'pay',
                    mode: 'payment',
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
                                        item.image.data.attributes.formats
                                            .thumbnail.url,
                                    ],
                                },
                                unit_amount: item.price * 100,
                            },
                            adjustable_quantity: {
                                enabled: true,
                                minimum: 1,
                            },
                            quantity: item.quantity,
                        };
                    }),
                    success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${req.headers.origin}/cancelled`,
                });
                res.status(200).json(session);
            } catch (err) {
                res.status(err.statusCode || 500).json(err.message);
            }
        } else {
            res.setHeader('Allow', 'POST');
            res.status(405).end('Method Not Allowed');
        }
    }
}
