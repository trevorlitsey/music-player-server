import express from 'express';
import { ApolloServer } from 'apollo-server-express';
require('dotenv').config();

import models from './models';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({
		models,
		user: {
			id: 1,
		},
	}),
});

const app = express();
server.applyMiddleware({ app });

// force: true to drop db
models.sequelize.sync({}).then(() => {
	app.listen({ port: 4000 }, () => {
		console.log(
			`🚀 Server ready at http://localhost:4000${server.graphqlPath}`
		);
	});
});
