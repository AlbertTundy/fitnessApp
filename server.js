const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const PORT = 8080;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Workout",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
}); 