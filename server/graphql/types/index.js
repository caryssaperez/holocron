const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;

const Arc = require('../../models/Arc');

const EventType = new GraphQLObjectType({
  name: 'event',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) }
  })
});

const ArcType = new GraphQLObjectType({
  name: 'arc',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    user: { type: new GraphQLNonNull(GraphQLID) },
    events: {
      type: new GraphQLList(EventType),
      resolve(parent, args) {
        return Arc.findBy({ user: args.user });
      }
    }
  })
});
