const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.get("/app", (req, res) => {
  res.send("Hello World");
});

app.post("/custom", (req, res) => {
  res.send({
    data: { headers: req.headers, body: req.body },
  });
});

app.listen(port, () => {
  console.log(`Server is listning on port: ${port}`);
});
