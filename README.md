# GraphiQL Middleware

Middleware for serving GraphiQL.

Works with Express and any other server that supports middleware of the format `(_, {set, send}) => ()`

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
