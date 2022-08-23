const express = require("express");
const prisma = require("../db");
const router = express.Router();
router.post("/custom-software-request", async (req, res) => {
  const {
    fullname,
    email,
    phone_number,
    business_name,
    business_type,
    business_description,
  } = req.body;
  try {
    if (
      !(
        fullname &&
        email &&
        phone_number &&
        business_type &&
        business_description
      )
    ) {
      return res.status(400).json("User Input cannot be empty");
    } else {
      const save = await prisma.request_service_development.create({
        data: {
          fullname,
          email,
          phone_number,
          business_name,
          business_type,
          business_description,
        },
      });
    }
    res.json({
      fullname,
      email,
      phone_number,
      business_name,
      business_type,
      business_description,
    });
  } catch (error) {
    console.log(error);
  }
});
router.post("/business-promotion-request", async (req, res) => {
  const {
    fullname,
    email,
    phone_number,
    business_name,
    business_type,
    business_description,
  } = req.body;

  try {
    if (
      !(
        fullname &&
        email &&
        phone_number &&
        business_name &&
        business_type &&
        business_description
      )
    ) {
      return res.status(400).json("User Input cannot be empty");
    } else {
      const save = await prisma.request_service_promotion.create({
        data: {
          fullname,
          email,
          phone_number,
          business_name,
          business_type,
          business_description,
        },
      });
      res.json({
        fullname,
        email,
        phone_number,
        business_name,
        business_type,
        business_description,
      });
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/mentorship-request", async (req, res) => {
  const { fullname, email, phone_number, mentorship_type, experience } =
    req.body;
  try {
    if (!(fullname && email && phone_number && mentorship_type && experience)) {
      return res.status(400).json("User Input cannot be empty");
    } else {
      const save = await prisma.request_service_mentor.create({
        data: {
          fullname,
          email,
          phone_number,
          mentorship_type,
          experience,
        },
      });
      res.status(200).json({
        fullname,
        email,
        phone_number,
        mentorship_type,
        experience,
      });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
