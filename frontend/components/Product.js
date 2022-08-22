import styled from 'styled-components';
import { ProductStyles } from '../styles/ProductStyle';
import Link from 'next/link';
import Loader from './Loader';
const Product = ({ product }) => {
    //Extract the info from props
    const { title, price, image, slug, availibility } = product.attributes;

    if (!product) return <Loader />
    return (
        <Link href={`product/${slug}`}>
            <ProductStyles>
                <div>
                    <img
                        src={image.data.attributes.formats.small.url}
                        alt={title}
                    />
                </div>
                <h2>{availibility ? "In Stock" : "Out of Stock"}</h2>
                <h2>{title}</h2>
                <h3>£{price}</h3>
            </ProductStyles>
        </Link>
    );
};

export default Product;
