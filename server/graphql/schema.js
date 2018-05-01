const _ = require('lodash');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLID } = graphql;

const ArcType = require('./types/arc');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    arc: {
      type: ArcType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Add code to retrieve record from mongo collection
        return;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
