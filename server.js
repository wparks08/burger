// require("dotenv").config();

const express = require("express");
const exphbrs = require("express-handlebars");
const burgerController = require("./controllers/burger_controller");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", burgerController);

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})