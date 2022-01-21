import express from "express";
import { engine } from "express-handlebars";
import overlay from "./jimpCode.js";

const port = process.env.PORT || 3000;
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  overlay();
  setTimeout(() => {
    res.render("index");
  }, 100);
});

app.listen(port, () => {
  console.log(`Active On Port ${port}`);
});
