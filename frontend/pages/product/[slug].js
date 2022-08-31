import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
    DetailsStyle,
    ProductInfo,
    Quantity,
    Buy,
    Details,
} from '../../styles/ProductDetailStyles';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useStateContext } from '../../lib/context';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import Loader from '../../components/Loader';
import productInfo from '../../lib/otherInfo';

const ProductDetails = () => {
    // Use State
    const { qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext();

    const {
        titleShipping,
        shippingDetail,
        mb2Title,
        mb2Detail,
        titleInTheBox,
        inTheBox,
        inTheBoxDescription,
    } = productInfo.data;
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
    const { title, description, image, price, availibility } =
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
            <Image
                src={image.data.attributes.formats.medium.url}
                alt={title}
                height="400"
                width="400"
                responsive
            />

            <ProductInfo>
                <h2>{title}</h2>
                <h4>£{price}</h4>
                <hr />
                <p>{description}</p>
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

                {availibility ? (
                    <Buy availibility={availibility}
                        onClick={() => {
                            onAdd(data.products.data[0].attributes, qty);
                            notify();
                        }}
                    >
                        <h5>Add to cart</h5>
                    </Buy>
                ) : (
                    <Buy disabled>
                        <h5><b>GONE</b></h5>
                    </Buy>
                )}

                <Details>
                    <div>
                        <h3>{titleShipping}</h3>
                        <p>{shippingDetail}</p>
                    </div>
                    <div>
                        <h3>{mb2Title}</h3>
                        <ul>
                        <li>{mb2Detail}</li>
                        </ul>
                    </div>
                    <div>
                        <h3>{titleInTheBox}</h3>
                        <ul>
                            {inTheBox.map((content, index) => (
                                <li key={index}>{content}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className='inTheBoxDescription'>{inTheBoxDescription}</p>
                    </div>
                </Details>
            </ProductInfo>
        </DetailsStyle>
    );
};

export default ProductDetails;
