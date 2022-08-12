import { useRouter } from 'next/router';
import Image from 'next/image';
import successImage from '../public/success.png';
import {
    Wrapper,
    Card,
    Address,
    OrderInfo,
    InfoWrapper,
} from '../styles/SuccessPage';

const stripe = require('stripe')(
    `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export const getServerSideProps = async (params) => {
    const order = await stripe.checkout.sessions.retrieve(
        params.query.session_id,
        { expand: ['line_items'] }
    );
    return { props: { order } };
};

const Success = ({ order }) => {
    const route = useRouter();
    console.log(order);

    return (
        <Wrapper>
            <Card
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.75 }}
                transiton={{ duration: 0.75 }}
            >
                <h1>Thank you for your order</h1>
                <h2>A confirmation email has been sent to</h2>
                <h2>{order.customer_details.email}</h2>
                <InfoWrapper>
                    <Address>
                        <h3>Address</h3>
                        {Object.entries(order.customer_details.address).map(
                            ([key, val]) => (
                                <p key={key}>
                                    {' '}
                                    {key}: {val}
                                </p>
                            )
                        )}
                    </Address>
                    <OrderInfo>
                        <h3>Products</h3>
                        {order.line_items.data.map((item) => (
                            <div key={item.id}>
                                <p>Product: {item.description}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: {item.price.unit_amount}</p>
                            </div>
                        ))}
                    </OrderInfo>
                </InfoWrapper>

                <button onClick={() => route.push('/')}>
                    Continue Shopping
                </button>
                <Image
                    src={successImage}
                    alt="success"
                    width="100"
                    height="100"
                    responsive
                />
            </Card>
        </Wrapper>
    );
};

export default Success;
