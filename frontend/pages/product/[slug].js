import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';
import Image from 'next/image'
import {
    DetailsStyle,
    ProductInfo,
    Quantity,
    Buy,
} from '../../styles/ProductDetails';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useStateContext } from '../../lib/context';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import Loader from '../../components/Loader';
const ProductDetails = () => {
    // Use State
    const { qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext();

    //Reset Qty
    useEffect(() => {
        setQty(1);
    }, []);

    //Fetch Graphql data
    const { query } = useRouter();

    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: { slug: query.slug },
    });
    const { data, fetching, error } = results;

    if (fetching) return <Loader />;
    if (error) return <p>Oh no... {error.message}</p>;
    //extract our data
    const { title, description, image, price } =
        data.products.data[0].attributes;

    // const iconImage = (
    //     <img
    //         src={image.data.attributes.formats.medium.url}
    //         height="10"
    //         width="10"
    //     />
    // );
    
    //Create a toast
    const notify = () => {
        toast.success(`${title} added to your cart`, {
            duration: 1500,
        });
    };

    return (
        <DetailsStyle>
            <Image src={image.data.attributes.formats.medium.url} alt={title} height="400" width="400" layout='fixed'/>
            <ProductInfo>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <Quantity>
                    <span>Quantity</span>
                    <button>
                        <AiFillMinusCircle onClick={decreaseQty} />
                    </button>
                    <p>{qty}</p>
                    <button>
                        <AiFillPlusCircle onClick={increaseQty} />
                    </button>
                </Quantity>
                <Buy
                    onClick={() => {
                        onAdd(data.products.data[0].attributes, qty);
                        notify();
                    }}
                >
                    Add to cart
                </Buy>
            </ProductInfo>
        </DetailsStyle>
    );
};

export default ProductDetails;
