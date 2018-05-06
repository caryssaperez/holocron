const graphql = require('graphql');
const mongoose = require('mongoose');
const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

const { ArcType, EventType } = require('./types');
const Arc = mongoose.model('arcs');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    arcs: {
      type: new GraphQLList(ArcType),
      args: { userId: { type: GraphQLID } },
      resolve(parent, args) {
        let castId = mongoose.Types.ObjectId(args.userId);
        return Arc.find({ _user: castId });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
