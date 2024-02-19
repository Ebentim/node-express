const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

const app = express();
app.use(express.json());

// Gets all product
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single product by Id
// 65d28f2a115218ec7332f271    sample id 1
// 65d28d49b63a24fccbbe5585    sample id 2
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update a product
app.put('/api/products:id', a)

// timileyinolayuwa     // usernme
// gYn4NO1Jw7lue6CI     // password

mongoose
  .connect(
    "mongodb+srv://timileyinolayuwa:gYn4NO1Jw7lue6CI@learn.ujpp2py.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the dataBase");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
