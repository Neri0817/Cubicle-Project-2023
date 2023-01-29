const express = require("express");
const routes = require("./routes");
const config = require("./config");
const initDatabase = require("./config/initDatabase");

//* const setupViewEngine = require("./setupViewEngine");
//* setupViewEngine(app);
const app = express();
require("./config/viewEngine")(app);

app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

initDatabase()
  .then(() =>
    app.listen(config.PORT, () => {
      console.log("Server is running on port " + config.PORT);
    })
  )
  .catch((err) => console.error(err.message));
