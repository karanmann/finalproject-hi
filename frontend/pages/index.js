import Head from 'next/head';
import Hero from '../components/Hero/Hero';

const Home = () => {
    return (
        <div>
            <Head>
                <title>#MB2</title>
                <meta name="MB2" content="Check em all out" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Hero>
                    <video
                        className="video"
                        src="https://user-images.githubusercontent.com/82885837/184859093-4fa1fec3-3ece-4234-b605-66cc4f3eec49.MOV"
                        autoPlay
                        loop
                        playsInline
                        muted
                    ></video>
                    <video
                        className="video"
                        src="https://user-images.githubusercontent.com/82885837/184858875-9979d5b0-ec90-4ce9-a15c-f50bd9929a32.MOV"
                        autoPlay
                        loop
                        playsInline
                        muted
                    ></video>
                    <video
                        className="video"
                        src="https://user-images.githubusercontent.com/82885837/184859093-4fa1fec3-3ece-4234-b605-66cc4f3eec49.MOV"
                        autoPlay
                        loop
                        playsInline
                        muted
                    ></video>
                    <video
                        className="video"
                        src="https://user-images.githubusercontent.com/82885837/184858875-9979d5b0-ec90-4ce9-a15c-f50bd9929a32.MOV"
                        autoPlay
                        loop
                        playsInline
                        muted
                    ></video>
                </Hero>
            </main>
        </div>
    );
};

export default Home;
