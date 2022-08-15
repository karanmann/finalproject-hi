import '../styles/globals.css';
import { Provider, createClient } from 'urql';
import Nav from '../components/Nav';
import { StateContext } from '../lib/context';
import { UserProvider } from '@auth0/nextjs-auth0';

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

console.log(process.env.NEXT_PUBLIC_BACKEND_API);

export const MyApp = ({ Component, pageProps }) => {
    return (
        <UserProvider>
            <StateContext>
                <Provider value={client}>
                    <Nav />
                    <Component {...pageProps} />
                </Provider>
            </StateContext>
        </UserProvider>
    );
};

export default MyApp;
