require("dotenv").config();
//async errors

const express = require("express");
const app = express();

const connectDB = require("./database/connect");
const productRouter = require("./routes/product");

const notFoundMiddleware = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1>STORE API</h1><a href="/api/v1/products">Products route</a>');
});

app.use("/api/v1/products", productRouter);
//products route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    // coonect database
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("server is listening on port 8080..."));
  } catch (err) {
    console.log(err);
  }
};

start();
