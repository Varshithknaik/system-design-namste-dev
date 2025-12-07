const express = require("express");

const PORT = 3010;
const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;" +
      "img-src 'self' https://cdn.iris.nitk.ac.in;"
  );
  next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(req.url);
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
