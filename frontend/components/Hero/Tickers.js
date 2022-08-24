import { useQuery } from 'urql';
import {
    TICKER_COL_ONE,
    TICKER_COL_TWO,
    TICKER_COL_THREE,
    TICKER_COL_FOUR,
    TICKER_COL_FIVE,
} from '../../lib/query';
import { TickerWrapper } from '../../styles/HomePageStyles';
import ScrollingImages from './ScrollingImages';
import Loader from '../Loader';

const Tickers = () => {
    const [results1] = useQuery({ query: TICKER_COL_ONE });
    const [results2] = useQuery({ query: TICKER_COL_TWO });
    const [results3] = useQuery({ query: TICKER_COL_THREE });
    const [results4] = useQuery({ query: TICKER_COL_FOUR });
    const [results5] = useQuery({ query: TICKER_COL_FIVE });
    if (
        results1.fetching ||
        results2.fetching ||
        results3.fetching ||
        results4.fetching ||
        results5.fetching
    )
        return <Loader />;
    if (
        results1.error ||
        results2.error ||
        results3.error ||
        results4.error ||
        results5.error
    )
        return <p>Oh no... {error.message}</p>;
    const products1 = results1.data.products.data;
    const products2 = results2.data.products.data;
    const products3 = results3.data.products.data;
    const products4 = results4.data.products.data;
    const products5 = results5.data.products.data;

    // if (fetching || fetching2 || fetching3 || fetching4 || fetching5)
    //     return <Loader />;
    // if (error || error2 || error3 || error4 || error5)
    //     return <p>Oh no... {error.message}</p>;

    // const { title, price, image, slug, availibility } = data.products.data.attributes;
    // if (!product1 ||) return <Loader />;
    return (
        <TickerWrapper>
            <div className="marquee col__1">
                <div className="marquee__group">
                    {products1.map((product1) => (
                        <ScrollingImages
                            key={product1.attributes.slug}
                            product={product1}
                        />
                    ))}
                </div>
            </div>
            <div className="marquee__reverse col__2">
                <div className="marquee__group">
                    {products2.map((product2) => (
                        <ScrollingImages
                            key={product2.attributes.slug}
                            product={product2}
                        />
                    ))}
                </div>
            </div>

            <div className="marquee col__3">
                <div className="marquee__group">
                    {products3.map((product3) => (
                        <ScrollingImages
                            key={product3.attributes.slug}
                            product={product3}
                        />
                    ))}
                </div>
            </div>

            <div className="marquee__reverse col__4">
                <div className="marquee__group">
                    {products4.map((product4) => (
                        <ScrollingImages
                            key={product4.attributes.slug}
                            product={product4}
                        />
                    ))}
                </div>
            </div>
            <div className="marquee col__5">
                <div className="marquee__group">
                    {products5.map((product5) => (
                        <ScrollingImages
                            key={product5.attributes.slug}
                            product={product5}
                        />
                    ))}
                </div>
            </div>
        </TickerWrapper>
    );
};

export default Tickers;
