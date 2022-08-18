import Image from 'next/image';
import { TickerWrapper } from '../../styles/HomePageStyles';

const Tickers = () => {
    return (
        <TickerWrapper>
            <div className="marquee col__1">
                <div className="marquee__group">
                    <img src="/images/01.png" alt="Hello" />
                    <img src="/images/02.png" alt="Hello" />
                    <img src="/images/03.png" alt="Hello" />
                    <img src="/images/04.png" alt="Hello" />
                    <img src="/images/05.png" alt="Hello" />
                    <img src="/images/06.png" alt="Hello" />
                    <img src="/images/07.png" alt="Hello" />
                    <img src="/images/08.png" alt="Hello" />
                    <img src="/images/09.png" alt="Hello" />
                    <img src="/images/10.png" alt="Hello" />
                </div>
            </div>
            <div className="marquee__reverse col__2">
                <div className="marquee__group">
                    <img src="/images/01.png" alt="Hello" />
                    <img src="/images/02.png" alt="Hello" />
                    <img src="/images/03.png" alt="Hello" />
                    <img src="/images/04.png" alt="Hello" />
                    <img src="/images/05.png" alt="Hello" />
                    <img src="/images/06.png" alt="Hello" />
                    <img src="/images/07.png" alt="Hello" />
                    <img src="/images/08.png" alt="Hello" />
                    <img src="/images/09.png" alt="Hello" />
                    <img src="/images/10.png" alt="Hello" />
                </div>
            </div>

            <div className="marquee col__3">
                <div className="marquee__group">
                    <img src="/images/01.png" alt="Hello" />
                    <img src="/images/02.png" alt="Hello" />
                    <img src="/images/03.png" alt="Hello" />
                    <img src="/images/04.png" alt="Hello" />
                    <img src="/images/05.png" alt="Hello" />
                    <img src="/images/06.png" alt="Hello" />
                    <img src="/images/07.png" alt="Hello" />
                    <img src="/images/08.png" alt="Hello" />
                    <img src="/images/09.png" alt="Hello" />
                    <img src="/images/10.png" alt="Hello" />
                </div>
            </div>

            <div className="marquee__reverse col__4">
                <div className="marquee__group">
                    <img src="/images/01.png" alt="Hello" />
                    <img src="/images/02.png" alt="Hello" />
                    <img src="/images/03.png" alt="Hello" />
                    <img src="/images/04.png" alt="Hello" />
                    <img src="/images/05.png" alt="Hello" />
                    <img src="/images/06.png" alt="Hello" />
                    <img src="/images/07.png" alt="Hello" />
                    <img src="/images/08.png" alt="Hello" />
                    <img src="/images/09.png" alt="Hello" />
                    <img src="/images/10.png" alt="Hello" />
                </div>
            </div>
        </TickerWrapper>
    );
};

export default Tickers;
