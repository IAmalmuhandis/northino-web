const express = require("express");
const prisma = require("../db");
const router = express.Router();
router.post("/addMessage", async (req, res) => {
  const { email_address, message, message_id, phone_number } = req.body;
  const save = await prisma.customersmessages.create({
    data: {
      email_address,
      message,
      message_id,
      phone_number,
    },
  });
  res.json({ email_address, message, message_id, phone_number });
});
module.exports = router;
