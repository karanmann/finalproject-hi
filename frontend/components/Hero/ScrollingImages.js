import Image from 'next/image';
import Link from 'next/link';

const ScrollingImages = ({ product }) => {
    const { title, description, price, image, slug, availibility } =
        product.attributes;

    return (
        <Link href={`product/${slug}`}>
            <div className="ScrollingImages__container">
                <Image
                    key={slug}
                    src={image.data.attributes.formats.small.url}
                    alt={title}
                    width={200}
                    height={200}
                />
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default ScrollingImages;
