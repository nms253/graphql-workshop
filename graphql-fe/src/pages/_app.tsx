// src/pages/_app.tsx
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client'; // Adjust path if needed
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
