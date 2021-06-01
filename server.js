// CREATE A VERY SIMPLE NODE EXPRESS AND MONGODB SERVER

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");
const cors = require("cors");

const app = express();
//when a new req comes in this server, it trit the body as a json
app.use(express.json());

//mi connetto a mongodb con questo entry-point
mongoose.connect("mongodb://localhost/react-shopping-cart-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const corsOpts = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

//define the products model
// 1° param è nome tabella, 2° param i campi
const Product = mongoose.model(
  "product",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    image: String,
    description: String,
    price: Number,
    availableSizes: [String],
  })
);

//define a first end-point - GET PRODUCTS
app.get("/api/products", cors(corsOpts), async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

//create a second end-point to create a products, i sending a req from this end-point - CREATE NEW PRODUCT
app.post("/api/products", cors(corsOpts), async (req, res) => {
  //create new product and save it in the db
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

//last API end-point - DELETE PRODUCT
app.delete("/api/products/:id", cors(corsOpts), async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server at http://localhost:5000"));
