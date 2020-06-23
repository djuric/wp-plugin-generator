const express = require("express");
const generate = require("./routes/generate");
const app = express();

app.use(express.json());
app.use("/api/generate", generate);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
