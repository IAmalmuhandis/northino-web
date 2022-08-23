const express = require("express");
const prisma = require("../db");
const router = express.Router();
router.post("/addSubscriber", async (req, res) => {
  const { full_name, email_address } = req.body;
  const find = await prisma.subscribers.findFirst({
    where: {
      email_address: { contains: email_address },
    },
  });
  if (find !== null) {
    res.status(500).json({ err: "You have already Subscribed" });
  } else {
    const save = await prisma.subscribers.create({
      data: {
        full_name,
        email_address,
      },
    });
    res.json({ full_name, email_address });
  }
});
module.exports = router;
