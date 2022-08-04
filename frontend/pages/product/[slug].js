import { useQuery } from 'urql';
import { GET_PRODUCT_QUERY } from '../../lib/query';
import { useRouter } from 'next/router';

const ProductDetails = () => {
    //Fetch Graphql data

    const { query } = useRouter();

    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: { slug: query.slug },
    });
    const { data, fetching, error } = results;

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;

    return (
        <div>
            <img src="" alt="" />
            <div>
                <h3>Title</h3>
                <p>description</p>
            </div>
            <div>
                <span>Quantity</span>
                <button>Plus</button>
                <p>0</p>
                <button>Minus</button>
            </div>
            <button>Add to cart</button>
        </div>
    );
};

export default ProductDetails;
