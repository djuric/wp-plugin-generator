const express = require("express");
const generate = require("../../core/generate");
const router = express.Router();

router.post("/", async (req, res) => {
  const { data, error } = await generate(req.body);
  if (error) return res.send(error);

  res.download(data);
});

module.exports = router;
