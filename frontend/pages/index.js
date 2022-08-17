import Head from 'next/head';
import Slider from '../components/Hero/Slider';

const Home = () => {
    return (
        <div>
            <Head>
                <title>#MB2</title>
                <meta name="MB2" content="Check em all out" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Slider />
            </main>
        </div>
    );
};

export default Home;
