import { useRouter } from 'next/router';
import Image from 'next/image'
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import formatMoney from '../lib/formatMoney';
import { Logout, Order, ProfileWrapper } from '../styles/ProfileStyles';
var moment = require('moment'); // require
import successImage from '../public/success.png'
import cancelImage from '../public/cancel.png'

const stripe = require('stripe')(
    `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

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


export const Profile = ({ user, orders }) => {

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
                            <h2>Order Date: <span>{moment.unix(order.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span></h2>
                            <h2>Order Number: <span>{order.id}</span></h2>
                            <h2>Total: <span>{formatMoney(order.amount)}</span></h2>
                            <h2>Email: <span>{user.email}</span></h2>
                            <div>{order.status === "succeeded" ? <Image src={successImage} alt="Success" height="20" width="20"></Image> : <Image src={cancelImage} alt="No Success" height="20" width="20"></Image>}</div>
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

export default Profile;