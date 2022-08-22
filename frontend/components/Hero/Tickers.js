import Image from 'next/image';
import { TickerWrapper } from '../../styles/HomePageStyles';


// We can replace the below array with the new data from the context API
const imagesArray = [
    '/images/01.png',
    '/images/02.png',
    '/images/03.png',
    '/images/04.png',
    '/images/05.png',
    '/images/06.png',
    '/images/07.png',
    '/images/08.png',
    '/images/09.png',
    '/images/10.png',
]; 


const Tickers = () => {
    return (
        <TickerWrapper>
            <div className="marquee col__1">
                <div className="marquee__group">
                    {imagesArray.map((image, index) => (
                        <img key={index} src={image} alt="Hello" />
                    ))}
                </div>
            </div>
            <div className="marquee__reverse col__2">
                <div className="marquee__group">
                    {imagesArray.map((image, index) => (
                        <img key={index} src={image} alt="Hello" />
                    ))}
                </div>
            </div>

            <div className="marquee col__3">
                <div className="marquee__group">
                    {imagesArray.map((image, index) => (
                        <img key={index} src={image} alt="Hello" />
                    ))}
                </div>
            </div>

            <div className="marquee__reverse col__4">
                <div className="marquee__group">
                    {imagesArray.map((image,index) => (
                        <img key={index} src={image} alt="Hello" />
                    ))}
                </div>
            </div>
            <div className="marquee col__5">
                <div className="marquee__group">
                    {imagesArray.map((image, index) => (
                        <img key={index} src={image} alt="Hello" />
                    ))}
                </div>
            </div>
        </TickerWrapper>
    );
};

export default Tickers;
