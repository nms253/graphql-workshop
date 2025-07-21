// lib/apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // Your NestJS backend
    cache: new InMemoryCache(),
});

export default client;