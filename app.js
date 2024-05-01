const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: true,
        message: "Hello World",
        data: null
    })
})

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});