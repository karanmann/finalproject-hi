import styled from 'styled-components';
import { ProductStyles } from '../styles/ProductStyle';

const Product = ({ product }) => {
    //Extract the info from props

    const { title, price, image } = product.attributes;
    return (
        <ProductStyles>
            <div>
                <img
                    src={image.data.attributes.formats.small.url}
                    alt={title}
                />
            </div>
            <h2>{title}</h2>
            <h3>{price}</h3>
        </ProductStyles>
    );
};

export default Product;
