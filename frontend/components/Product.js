import { ProductStyles, Pill } from '../styles/ProductStyles';
import Link from 'next/link';
import Loader from './Loader';
import Image from 'next/image';

const Product = ({ product }) => {
    //Extract the info from props
    const { title, price, image, slug, availibility } = product.attributes;

    if (!product) return <Loader />;
    return (
        <Link href={`product/${slug}`}>
            <ProductStyles>
                <Pill availibility={availibility}>{availibility ? 'In Stock' : 'Gone'}</Pill>
                <Image
                    src={image.data.attributes.formats.small.url}
                    alt={title}
                    width="300"
                    height="300"
                    // layout="fixed"
                />

                <h2>{title}</h2>
                <h3>£{price}</h3>
            </ProductStyles>
        </Link>
    );
};

export default Product;
