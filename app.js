const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
app.options("*", cors());
app.use(cors());

const corsOptions = {
  origin: "https://api.stocktwits.com", // where the request is coming from
};
app.get("/:symbol", cors(corsOptions), function (req, res, next) {}); //will take whatever is in search bar

app.use(express.static("client/build"));

app.get("/*", cors(corsOptions), function (req, res) {
  res.sendFile(path.join(`${__dirname}/client`, "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`should be working. port ${PORT}`);
});
