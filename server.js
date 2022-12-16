// require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));

// Index Route


// New
app.get("/logs/new", (req, res) => {
    res.render("New");
  });

// Create

// Show Route



// Mongo


// Logs Model


// Delete Route


// Put Route

//Port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
