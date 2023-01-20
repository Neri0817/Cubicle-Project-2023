const express = require("express");
const routes = require("./routes");
const config = require("./config");

//* const setupViewEngine = require("./setupViewEngine");
//* setupViewEngine(app);
const app = express();
require("./config/viewEngine")(app);

app.use(express.static("src/public"));
app.use(routes);

app.listen(config.PORT, () => {
  console.log("Server is running on port " + config.PORT);
});
