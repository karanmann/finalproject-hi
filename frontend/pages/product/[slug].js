import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';
import {
    DetailsStyle,
    ProductInfo,
    Quantity,
    Buy,
} from '../../styles/ProductDetails';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useStateContext } from '../../lib/context';

const ProductDetails = () => {
    // Use State
    const { qty, increaseQty, decreaseQty, onAdd } = useStateContext();
    console.log(qty);

    //Fetch Graphql data
    const { query } = useRouter();

    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: { slug: query.slug },
    });
    const { data, fetching, error } = results;

    console.log('RESULTS', results);

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
    //extract our data
    console.log('DATA1', data.products);
    const { title, description, image, price } =
        data.products.data[0].attributes;

    return (
        <DetailsStyle>
            <img src={image.data.attributes.formats.medium.url} alt={title} />
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
                    onClick={() => onAdd(data.products.data[0].attributes, qty)}
                >
                    Add to cart
                </Buy>
            </ProductInfo>
        </DetailsStyle>
    );
};

export default ProductDetails;
