const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "*",
  allowedHeaders: "*",
};

app.get("/:symbol", cors(corsOptions), function (req, res, next) {}); //will take whatever is in search bar

app.use(express.static("client/build"));

app.get("/*", cors(corsOptions), function (req, res) {
  res.sendFile(path.join(`${__dirname}/client`, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`should be working. port ${PORT}`);
});
