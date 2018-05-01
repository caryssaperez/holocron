const graphql = require('graphql');
const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = graphql;

exports.arcType = new GraphQLObjectType({
  name: 'arc',
  fields: function() {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      title: {
        type: GraphQLString
      }
    };
  }
});
