import { useRouter } from 'next/router';
const stripe = require('stripe')(
    `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import formatMoney from '../lib/formatMoney';
import { Logout, Order, ProfileWrapper } from '../styles/ProfileStyles';

export const getServerSideProps = withPageAuthRequired({
    //ctx gives us access to user context
    async getServerSideProps(ctx) {
        const session = getSession(ctx.req, ctx.res);
        const stripeId =
            session.user[`${process.env.BASE_URL}/stripe_customer_id`];
        const paymentIntents = await stripe.paymentIntents.list({
            customer: stripeId,
        });

        console.warn(paymentIntents);

        return { props: { orders: paymentIntents.data } };
    },
});

export default function Profile({ user, orders }) {
    const route = useRouter();

    return (
        user && (
            <ProfileWrapper>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <div>
                    {orders.map((order) => (
                        <Order key={order.id}>
                            <h1><b><u>ORDER DETAILS</u></b></h1>
                            <h2>Order Number: {order.id}</h2>
                            <h2>Total: {formatMoney(order.amount)}</h2>
                            <h1>Email: {user.email}</h1>
                        </Order>
                    ))}
                </div>
                <Logout onClick={() => route.push('/api/auth/logout')}>
                    Log out
                </Logout>
            </ProfileWrapper>
        )
    );
}
