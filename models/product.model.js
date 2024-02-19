const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product is required"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;