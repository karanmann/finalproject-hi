import { useQuery } from 'urql';
import { PRODUCT_QUERY } from '../../lib/query';
import { TickerWrapper } from '../../styles/HomePageStyles';
import ScrollingImages from './ScrollingImages';
import Loader from '../Loader';

const Tickers = () => {
    const [results] = useQuery({ query: PRODUCT_QUERY });
    const { data, fetching, error } = results;

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
    const products = data.products.data;

    console.log(products);

    // const { title, price, image, slug, availibility } = data.products.data.attributes;
    if (!products) return <Loader />
    return (
        <TickerWrapper>
            <div className="marquee col__1">
                <div className="marquee__group">
                    {products.map((product) => (
                        <ScrollingImages product={product} />
                    ))}
                </div>
            </div>
            <div className="marquee__reverse col__2">
                <div className="marquee__group">
                    {products.map((product) => (
                        <ScrollingImages product={product} />
                    ))}
                </div>
            </div>

            <div className="marquee col__3">
                <div className="marquee__group">
                    {products.map((product) => (
                        <ScrollingImages product={product} />
                    ))}
                </div>
            </div>

            <div className="marquee__reverse col__4">
                <div className="marquee__group">
                    {products.map((product) => (
                        <ScrollingImages product={product} />
                    ))}
                </div>
            </div>
            <div className="marquee col__5">
                <div className="marquee__group">
                    {products.map((product) => (
                        <ScrollingImages product={product} />
                    ))}
                </div>
            </div>
        </TickerWrapper>
    );
};

export default Tickers;
