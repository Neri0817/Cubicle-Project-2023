const express = require("express");
const config = require("./config");

//* const setupViewEngine = require("./setupViewEngine");
//* setupViewEngine(app);
const app = express();
require("./config/viewEngine")(app);

app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(config.PORT, () => {
  console.log("Server is running on port " + config.PORT);
});
