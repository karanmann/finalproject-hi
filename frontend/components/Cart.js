import { useStateContext } from '../lib/context';
import Image from 'next/image';
import {
    CartWrapper,
    CartStyle,
    Card,
    CardInfo,
    EmptyStyle,
    Checkout,
    Cards,
} from '../styles/CartStyles';
import { Quantity } from '../styles/ProductDetailStyles';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import getStripe from '../lib/getStripe';

// Animation Variants
const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
};

const cards = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};

// Payment

const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(cartItems),
    });

    const data = await response.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
};

// Function component
const Cart = () => {
    const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
        useStateContext();

    const handleCheckout = async () => {
        const stripe = await getStripe();
        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON' },
            body: JSON.stringify(cartItems),
        });

        const data = await response.json();
        await stripe.redirectToCheckout({ sessionId: data.id });
    };

    return (
        <CartWrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCart(false)}
        >
            <CartStyle
                initial={{ x: '50%' }}
                animate={{ x: '0%' }}
                exit={{ x: '50%' }}
                transition={{ type: 'tween' }}
                onClick={(e) => e.stopPropagation()}
            >
                {cartItems.length < 1 && (
                    <EmptyStyle
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1>Cart Empty!</h1>
                        {/* <FaShoppingCart /> */}
                        <video
                            className="video__emptyCart"
                            src="https://user-images.githubusercontent.com/82885837/186405953-a9356e64-daa7-4e87-abd1-c021f21bc7c3.mp4"
                            autoPlay
                            loop
                            playsInline
                            muted
                            // width="300"
                        ></video>
                    </EmptyStyle>
                )}
                <Cards layout variants={cards} initial="hidden" animate="show">
                    {cartItems.length >= 1 &&
                        cartItems.map((item) => {
                            return (
                                <Card layout variants={card} key={item.slug}>
                                    <Image
                                        src={
                                            item.image.data.attributes.formats
                                                .thumbnail.url
                                        }
                                        alt={item.title}
                                        height="128"
                                        width="128"
                                        layout="intrinsic"
                                    />
                                    <CardInfo>
                                        <h3>{item.title}</h3>
                                        <h3>£{item.price}</h3>
                                        <Quantity>
                                            <span>Quantity</span>
                                            <button
                                                onClick={() => onRemove(item)}
                                            >
                                                <AiFillMinusCircle />
                                            </button>
                                            <p>{item.quantity}</p>
                                            <button
                                                onClick={() => onAdd(item, 1)}
                                            >
                                                <AiFillPlusCircle />
                                            </button>
                                        </Quantity>
                                    </CardInfo>
                                </Card>
                            );
                        })}
                    {cartItems.length >= 1 && (
                        <Checkout layout>
                            <h3>Subtotal: £{totalPrice}</h3>
                            <button onClick={handleCheckout}>
                                <h5>Purchase</h5>
                            </button>
                        </Checkout>
                    )}
                </Cards>
            </CartStyle>
        </CartWrapper>
    );
};

export default Cart;
