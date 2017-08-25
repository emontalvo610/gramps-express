import express from 'express';
import bodyParser from 'body-parser';

import { grampsExpress, graphiqlExpress } from './index';

const app = express();

app.use(bodyParser.json());

app.all(
  '/graphql',
  grampsExpress({
    dataSources: [],
    extraContext: req => ({ req }),
  }),
);

app.get(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

export default app;
