const express = require("express");
const app = express();
const productsRoute = require("./routes/products");
const usersRoute = require("./routes/users");

const { mongoConnect } = require("./mongodb/connect");

app.use(express.json());
app.use("/users", usersRoute);
app.use("/products", productsRoute);

mongoConnect(() => {
  app.listen(4000, () => {
    console.log("server is listening...");
  });
});

