// Return HTML from https://github.com/graphql/graphiql/tree/main/packages/graphiql#cdn-bundle

const graphiqlMiddleware = ({ endpointURL }, props = {}) => (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(`<html>
    <head>
      <title>Simple GraphiQL Example</title>
      <link href="https://unpkg.com/graphiql/graphiql.min.css" rel="stylesheet" />
    </head>
    <body style="margin: 0;">
      <div id="graphiql" style="height: 100vh;"></div>
  
      <script
        crossorigin
        src="https://unpkg.com/react/umd/react.production.min.js"
      ></script>
      <script
        crossorigin
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      ></script>
      <script
        crossorigin
        src="https://unpkg.com/graphiql/graphiql.min.js"
      ></script>
  
      <script>
        const props = ${JSON.stringify(props)};
        const graphQLFetcher = graphQLParams =>
          fetch('${encodeURI(endpointURL)}', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(graphQLParams),
          })
            .then(response => response.json())
            .catch(() => response.text());
        ReactDOM.render(
          React.createElement(GraphiQL, { fetcher: graphQLFetcher, ...props }),
          document.getElementById('graphiql'),
        );
      </script>
    </body>
  </html>`);
};

module.exports = {
  graphiqlMiddleware: graphiqlMiddleware,
};
