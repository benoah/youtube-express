import Express from "express";
import products from "./products.js";

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("hello ben world");
  res.json(products);
});

app.listen(port, () => console.log("listening on port" + port));
