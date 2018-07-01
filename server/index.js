const express = require('express');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const schema = require('./schema/schema');

mongoose.connect('mongodb://<DB-USERNAME>:<DB-PASSWORD>@<MLAB-DATABASE-URL>/graphql')
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening on port ', 4000);
});
