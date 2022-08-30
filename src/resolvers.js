const Color = require("../models/Color");

const resolvers = {
  Query: {
    hello: () => "Hello world",
    getAllColors: async () => {
      const colors = await Color.find();
      return colors;
    },
    async getColor(_, { id }) {
      return await Color.findById(id);
    },
  },
  Mutation: {
    async createColor(parent, { color }, context, info) {
      const { title, code } = color;
      const newColor = new Color({ title, code });
      await newColor.save();
      return newColor;
    },
    async deleteColor(_, { id }) {
      await Color.findByIdAndDelete(id);
      return "Color Deleted";
    },
    async updateColor(_, { id, color }) {
      const { title, code } = color;
      const newColor = await Color.findByIdAndUpdate(
        id,
        {
          $set: {
            title,
            code,
          },
        },
        {
          new: true,
        }
      );
      return newColor;
    },
  },
};

module.exports = {
  resolvers,
};