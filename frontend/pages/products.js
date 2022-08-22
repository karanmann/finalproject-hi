import { useQuery } from 'urql';
import { PRODUCT_QUERY } from '../lib/query';
import Product from '../components/Product';
import { Gallery } from '../styles/Gallery';
import Loader from '../components/Loader';

const Products = () => {
    // Fetch products from strapi

    const [results] = useQuery({ query: PRODUCT_QUERY });
    const { data, fetching, error } = results;

    if (fetching) return <Loader />;
    if (error) return <p>Oh no... {error.message}</p>;
    const products = data.products.data;

    return (
        <div>
            <Gallery>
                {products.map((product) => (
                    <Product key={product.attributes.slug} product={product} />
                ))}
            </Gallery>
        </div>
    );
};

export default Products;
