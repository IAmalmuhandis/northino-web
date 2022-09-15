const express = require("express");
const prisma = require("../db");
const router = express.Router();
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
