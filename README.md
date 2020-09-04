# GraphiQL Middleware

Middleware for serving GraphiQL.

Works with Express and any other server that supports middleware of the format `(_, {set, send}) => ()`

## API

```js
graphiqlMiddleware(options, props)
```

Where `options` are:

- endpointURL

And `props` are serializable [GraphiQL component props](https://github.com/graphql/graphiql/master/packages/graphiql/README.md#props).

## Usage

```js
import { graphiqlMiddleware } from 'graphiql-middleware';

app.use(
    '/graphiql',
    graphiqlMiddleware({
        endpointURL: '/graphql',
    }),
);
```
