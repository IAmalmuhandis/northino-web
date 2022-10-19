/** @format */

const express = require("express");
var cloudinary = require("cloudinary").v2;
const prisma = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
cloudinary.config({
  secure: true,
});

router.post("/learnerSignup", async (req, res) => {
  try {
    const { firstname, lastname, phone_number, email, password } = req.body;

    if (!(firstname && lastname && phone_number && email && password)) {
      return res.status(400).send("Input cannot be empty");
    }
    const findUser = await prisma.learner_signup.findFirst({
      where: {
        email: {
          contains: email,
        },
      },
    });
    if (findUser) {
      return res.status(401).send("User Already exist");
    } else {
      encryptPassword = await bcrypt.hash(password, 10);

      const user = await prisma.learner_signup.create({
        data: {
          firstname: firstname,
          lastname: lastname,
          phone_number: phone_number,
          email: email,
          password: encryptPassword,
        },
      });

      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "90d",
        }
      );
      user.token = token;
      return res.status(200).send("Account was created successfully");
    }
  } catch (error) {
    return res.json(error.message);
  }
});

router.post("/learnerLogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json({ Error: "Login input required" });
    }

    const user = await prisma.learner_signup.findFirst({
      where: {
        email: {
          contains: email,
        },
      },
    });

    if (!user) {
      return res.status(404).json({ Success: "User Not Found" });
    } else if (
      user.email === email &&
      user &&
      (await bcrypt.compare(password, user.password))
    ) {
      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "90d",
        }
      );
      user.token = token;
      return res.status(200).json({ Token: user.token });
    } else {
      return res.status(401).json({ Error: "Incorrect login details" });
    }
  } catch (error) {
    return res.json(error.message);
  }
});

router.post("/tutorSignup", async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      phone_number,
      email,
      password,
      experience,
      description,
      image,
    } = req.body;

    if (
      !(
        firstname &&
        lastname &&
        phone_number &&
        email &&
        password &&
        experience &&
        description &&
        image
      )
    ) {
      return res.status(400).send("Input cannot be empty");
    }
    const findUser = await prisma.tutor_signup.findFirst({
      where: {
        email: {
          contains: email,
        },
      },
    });
    if (findUser) {
      return res.status(401).send("User Already exist");
    } else {
      encryptPassword = await bcrypt.hash(password, 10);

      const image = await cloudinary.uploader.upload(
        image,
        {
          public_id: firstname + "-" + lastname,
        }
      );

      console.log(image);
      if (image) {
        const user = await prisma.tutor_signup.create({
          data: {
            firstname: firstname,
            lastname: lastname,
            phone_number: phone_number,
            email: email,
            password: encryptPassword,
            experience: experience,
            description: description,
            image: image.url,
          },
        });
      }
    
      

      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "90d",
        }
      );
      user.token = token;
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.json(error.message);
  }
});

router.post("/tutorLogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("Login input required");
    }
    const user = await prisma.tutor_signup.findFirst({
      where: {
        email: {
          contains: email,
        },
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    } else if (
      user.email === email &&
      user &&
      (await bcrypt.compare(password, user.password))
    ) {
      const token = jwt.sign(
        { user_id: user.id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "90d",
        }
      );
      user.token = token;
      return res.status(200).json(user);
    } else {
      return res.status(401).json({ message: "Incorrect login details" });
    }
  } catch (error) {
    return res.json(error.message);
  }
});

router.post("/course", async (req, res) => {
  const {
    course_title,
    course_subtitle,
    course_desc,
    level,
    course_category,
    course_image_url,
    promotional_video_url,
    welcome_message,
    congratulation_message,
    course_price,
  } = req.body;

  try {
    if (
      !(
        course_title &&
        course_subtitle &&
        course_desc &&
        level &&
        course_category &&
        course_image_url &&
        promotional_video_url &&
        welcome_message &&
        congratulation_message &&
        course_price
      )
    ) {
      return res.status(400).json("Input cannot be empty");
    } else {
      const image = await cloudinary.uploader.upload(image_url);
      const result = await prisma.course_info.create({
        data: {
          course_title,
          course_subtitle,
          course_desc,
          level,
          course_category,
          course_image_url: image.url,
          promotional_video_url,
          welcome_message,
          congratulation_message,
          course_price,
        },
      });
    }
    return res.json({ result });
  } catch (error) {
    return res.json(error.message);
  }
});

router.post("/addVideo", async (req, res) => {});

module.exports = router;
