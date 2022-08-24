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
    console.log(order.customer_details.address);

    const { line1, line2, postal_code, city, state, country } =
        order.customer_details.address;
    return (
        <Wrapper>
            <Card
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.75 }}
            >
                <h1>Thank you for your order</h1>
                <h2>A confirmation email has been sent to</h2>
                <h2>{order.customer_details.email}</h2>
                <div>
                    <InfoWrapper>
                        <Address>
                            <h3>Address</h3>
                            <div>
                                <p>{line1}</p>
                                {line2 && <p>{line2}</p>}
                                <p>{postal_code}</p>
                                <p>{city}</p>
                                {state && <p>{state}</p>}
                                <p>{country}</p>
                            </div>
                        </Address>
                        <OrderInfo>
                            <h3>Products</h3>
                            {order.line_items.data.map((item) => (
                                <div key={item.id}>
                                    <p>Product: {item.description}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>
                                        Price: £{item.price.unit_amount / 100}
                                    </p>
                                </div>
                            ))}
                        </OrderInfo>
                    </InfoWrapper>
                    <button onClick={() => route.push('/')}>
                        <h5>Continue Shopping</h5>
                    </button>
                </div>

                <Image
                    src={successImage}
                    alt="success"
                    width="100"
                    height="100"
                    responsive="true"
                />
            </Card>
        </Wrapper>
    );
};

export default Success;
