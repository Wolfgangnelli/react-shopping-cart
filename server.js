// CREATE A VERY SIMPLE NODE EXPRESS AND MONGODB SERVER

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");
const cors = require("cors");

const app = express();
//when a new req comes in this server, it trit the body as a json
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/**
 * Render static files inside build folder
 * Cosi se vado su http://localhost:5000 ho la mia App in production mode, not develop
 */
app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

//mi connetto a mongodb con questo entry-point
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/react-shopping-cart-db",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

const corsOpts = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

/**
 *  PRODUCT MODEL
 */
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

/**
 * ORDER MODEL
 */
const Order = mongoose.model(
  "order",
  new mongoose.Schema(
    {
      _id: { type: String, default: shortid.generate },
      email: String,
      name: String,
      address: String,
      total: Number,
      cartItems: [
        {
          _id: String,
          title: String,
          price: Number,
          count: Number,
        },
      ],
    },
    {
      timestamps: true,
    }
  )
);
// API for create an order
app.post("/api/orders", cors(corsOpts), async (req, res) => {
  if (
    !req.body.data.name ||
    !req.body.data.email ||
    !req.body.data.address ||
    !req.body.data.total ||
    !req.body.data.cartItems
  ) {
    return res.send({ message: "Data is required." });
  }
  const order = await Order(req.body.data).save();
  res.send(order);
});

// API for show list of orders
app.get("/api/orders", cors(corsOpts), async (req, res) => {
  const orders = await Order.find({});
  res.send(orders);
});

// API for delete a order
app.delete("/api/orders/:id", cors(corsOpts), async (req, res) => {
  const deletedOrder = await Order.findByIdAndDelete(req.params.id);
  res.send(deletedOrder);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server at http://localhost:5000"));
