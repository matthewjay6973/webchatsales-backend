const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/health", (req, res) => res.send("ok"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server listening on", PORT));
