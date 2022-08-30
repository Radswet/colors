const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Color {
    id: ID
    title: String
    description: String
  }
  type Query {
    hello: String
    getAllColors: [Color]
    getColor(id: ID): Color
  }
  input ColorInput {
    title: String
    description: String
  }
  type Mutation {
    createColor(task: ColorInput): Color
    deleteColor(id: ID): String
    updateColor(id: ID, task: ColorInput): Color
  }
`;

module.exports = {
  typeDefs,
};