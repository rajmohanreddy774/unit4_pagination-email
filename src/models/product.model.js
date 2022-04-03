const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    Title: { type: String, required: true },
    Price: { type: Number, required: true },
    SellerEmail: { type: String, required: true },
    Product_image: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
