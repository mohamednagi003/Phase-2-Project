const express = require("express");
const Subscription = require("../models/Subscription");
const router = express.Router();

router.post("/", async (req, res) => {
  const sub = new Subscription(req.body);
  await sub.save();
  res.json(sub);
});

router.get("/", async (req, res) => {
  const subs = await Subscription.find();
  res.json(subs);
});

module.exports = router;
