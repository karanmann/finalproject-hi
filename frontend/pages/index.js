import Head from 'next/head';
import Slider from '../components/Hero/Slider';
import Tickers from '../components/Hero/Tickers';
import Loader from '../components/Loader';
import Announcement from "../components/Announcement"

const Home = () => {
    return (
        <div>
            <Head>
                <title>#MB2</title>
                <meta name="title" content="#MB2" />
                <meta
                    name="description"
                    content="MB2 is a series of art vinyl toys, with limited quantities available. "
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mb2.vercel.app/" />
                <meta property="og:title" content="#MB2" />
                <meta
                    property="og:description"
                    content="MB2 is a series of art vinyl toys, with limited quantities available."
                />
                <meta
                    property="og:image"
                    content="https://user-images.githubusercontent.com/82885837/187440582-baa60537-da05-4b6e-8915-19bf8378630e.png"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://mb2.vercel.app/"
                />
                <meta property="twitter:title" content="#MB2" />
                <meta
                    property="twitter:description"
                    content="MB2 is a series of art vinyl toys, with limited quantities available."
                />
                <meta
                    property="twitter:image"
                    content="https://user-images.githubusercontent.com/82885837/187440582-baa60537-da05-4b6e-8915-19bf8378630e.png"
                />
                <link rel="icon" href="/favicon.ico" />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest"></link>

            </Head>

            <main>
                <Announcement />
                <Slider />
                <Tickers />

            </main>
        </div>
    );
};

export default Home;
