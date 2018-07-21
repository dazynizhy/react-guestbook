import { HttpLink, ApolloClient, InMemoryCache} from 'apollo-boost'
import { setContext } from 'apollo-link-context';

// sub
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


function applyWsLink(httpLink) {
    const wsLink = new WebSocketLink({
        uri: `ws://localhost:3000/subscriptions`,
        options: {
          reconnect: true
        }
    });

    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    const link = split(
        // split based on operation type
        ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
        },
        wsLink,
        httpLink,
    );

    return link
}

function createApolloClient(store) {

    const httpLink = new HttpLink({
        uri: 'http://localhost:3000/graphql'
    })

    const authLink = setContext((_, { headers }) => {
        
        const state = store.getState()
        const token = state.auth.token
        // if(!token) {
        //     return { headers }
        // }
        return {
          headers: {
            ...headers,
            authorization: token ? `${token}` : "",
          }
        }
    });

    const link = applyWsLink(authLink.concat(httpLink))

    const client = new ApolloClient({
       link: link,//authLink.concat(httpLink),
       cache: new InMemoryCache()
    })
    return client
}

export default createApolloClient