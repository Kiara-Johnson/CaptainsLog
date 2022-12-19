require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Logs = require("./models/logs");
// const bodyParser = require('body-parser')

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Index Route
app.get("/logs", (req, res) => {
  Logs.find({}, (error, allLogs) => {
    res.render("Index", { Logs: allLogs });
  });
});

// Show Route
app.get("/logs/:id", (req, res) => {
    Logs.findById(req.params.id, (err, foundLogs) => {
      res.render("Show", {
        logs: foundLogs,
      });
    });
  });

// New
app.get("/logs/new", (req, res) => {
  res.render("New");
});

// Create
app.post("/logs", (req, res) => {
  Log.create(req.body, (error, newPokemon) => {
    res.redirect("/logs");
  });
});

//Edit
app.get("logs/:id/edit", (req, res) => {
    Logs.findById(req.params.id, (err, logsData) => {
      res.render("Edit", { logs: logsData });
    });
  });

// Put Route
app.put("/logs/:id", (req, res) => {
    Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLogs) => { 
      res.redirect(`/logs/${req.params.id}`);
    })
  })
  

// Delete Route
app.delete("/logs/:id", (req, res) => {
  Logs.findByIdAndRemove(req.params.id, (err, updatedLogs) => {
    res.redirect("/logs");
  });
});

//Port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
