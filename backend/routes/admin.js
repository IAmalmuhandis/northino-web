/** @format */

const express = require("express");
var cloudinary = require("cloudinary").v2;
const prisma = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
cloudinary.config();

router.post("/addBuiltProject", async (req, res) => {
  const { project_name, project_description, project_link, project_logo } =
    req.body;
  try {
    if (
      !(project_name && project_description && project_link && project_logo)
    ) {
      return res.status(400).json("Input cannot be empty");
    } else {
      const save = await prisma.built_projects.create({
        data: {
          project_name,
          project_description,
          project_link,
          project_logo,
        },
      });
    }
    res.json({
      project_name,
      project_description,
      project_link,
      project_logo,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/addClientProject", async (req, res) => {
  const {
    client_name,
    project_name,
    project_description,
    project_link,
    project_logo,
  } = req.body;
  try {
    if (
      !(
        client_name &&
        project_name &&
        project_description &&
        project_link &&
        project_logo
      )
    ) {
      return res.status(400).json("Input cannot be empty");
    } else {
      const save = await prisma.client_projects.create({
        data: {
          client_name,
          project_name,
          project_description,
          project_link,
          project_logo,
        },
      });
    }
    res.json({
      client_name,
      project_name,
      project_description,
      project_link,
      project_logo,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/addMentor", async (req, res) => {
  const { name, fieldOfExperience, about, picture, uniqueId } = req.body;
  try {
    if (!(name && fieldOfExperience && about && picture && uniqueId)) {
      return res.status(400).json("Input cannot be empty");
    } else {
      const save = await prisma.mentors.create({
        data: {
          name,
          fieldOfExperience,
          about,
          picture,
          uniqueId,
        },
      });
    }
    res.json({
      name,
      fieldOfExperience,
      about,
      picture,
      uniqueId,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/addPromotedBusinesses", async (req, res) => {
  const { business_name, business_logo, business_description } = req.body;
  try {
    if (!(business_name && business_logo && business_description)) {
      return res.status(400).json("Input cannot be empty");
    } else {
      const save = await prisma.promoted_businesses.create({
        data: {
          business_name,
          business_logo,
          business_description,
        },
      });
    }
    res.json({
      business_name,
      business_logo,
      business_description,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/uploadImage", async (req, res) => {
  const { image_url, image_name } = req.body;

  if (!(image_url && image_name)) {
    return res.status(400).json("Input cannot be empty");
  }

  try {
    const result = await cloudinary.uploader.upload(image_url, {
      public_id: image_name,
    });

    if (result) {
      await prisma.images.create({
        data: {
          image_url: result.url,
          image_name: result.public_id,
        },
      });
      return res.status(200).json({
        Success: "Saved",
      });
    }
  } catch (error) {
    return res.json(error.message);
  }
});

router.post("/uploadVideo", async (req, res) => {
  const { video_url, video_name } = req.body;

  if (!(video_url && video_name)) {
    return res.status(400).json("Input cannot be empty");
  }

  try {
    const result = await cloudinary.uploader.upload_large(
      video_url,
      {
        resource_type: "video",
        public_id: video_name,
        chunk_size: 6000000,
      },
      function (err, result) {
        if (err) {
          return res.json(err);
        }
         prisma.videos.create({
        data: {
          video_url: result.url,
          video_name: result.public_id,
        },
      });
       res.status(200).json({
        Success: "Saved",
      });
        return res.status(200).json(result);
      }
    );

    //console.log(result);
    // if (result) {
    //   await prisma.videos.create({
    //     data: {
    //       video_url: result.url,
    //       video_name: result.public_id,
    //     },
    //   });
    //   return res.status(200).json({
    //     Success: "Saved",
    //   });
    // }
  } catch (error) {
    return res.json(error.message);
  }
});

router.get("/getClientProjects", async (req, res) => {
  const find = await prisma.client_projects.findMany({});
  res.json(find);
});

router.get("/getBuiltProjects", async (req, res) => {
  const find = await prisma.built_projects.findMany({});
  res.json(find);
});

router.get("/getMentors", async (req, res) => {
  const find = await prisma.mentors.findMany({});
  res.json(find);
});

router.get("/getPromotedBusinesses", async (req, res) => {
  const find = await prisma.promoted_businesses.findMany({});
  res.json(find);
});

module.exports = router;
