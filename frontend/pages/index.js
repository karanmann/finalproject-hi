import Head from 'next/head';
import { useQuery } from 'urql';
import { PRODUCT_QUERY } from '../lib/query';
import Product from '../components/Product';
import { Gallery } from '../styles/Gallery';
const Home = () => {
    // Fetch products from strapi

    const [results] = useQuery({ query: PRODUCT_QUERY });
    const { data, fetching, error } = results;

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
    const products = data.products.data;

    return (
        <div>
            <Head>
                <title>MB2</title>
                <meta name="MB2" content="Check em all out" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Next JS</h1>
                <Gallery>
                    {products.map((product) => (
                        <Product
                            key={product.attributes.slug}
                            product={product}
                        />
                    ))}
                </Gallery>
            </main>
        </div>
    );
};

export default Home;
