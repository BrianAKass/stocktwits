const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const axios = require("axios");
app.use(express.json());
app.use(express.static("client/build"));
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/:symbol", async function (req, res, next) {
  const value = await axios(
    `https://api.stocktwits.com/api/2/streams/symbol/${req.params.symbol}.json`
  );

  res.send(value.data);
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(`${__dirname}/client`, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`should be working. port ${PORT}`);
});
