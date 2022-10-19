/** @format */

const express = require("express");
const prisma = require("../db");
const router = express.Router();

router.post("/addVideo", async (req, res) => {
  const { section_type, video_url, video_title, video_description } = req.body;

  if (!(section_type && video_url && video_title && video_description)) {
    return res.status(400).json("Input cannot be empty");
  }

  const find = await prisma.northino_tv.findFirst({
    where: {
      video_url: { contains: video_url },
    },
  });

  if (find !== null) {
    res.status(500).json({ err: "Video already exist" });
  } else {
    const save = await prisma.northino_tv.create({
      data: {
        section_type,
        video_url,
        video_title,
        video_description,
      },
    });
    res
      .status(200)
      .json({ section_type, video_url, video_title, video_description });
  }
});

router.get("/getVideos", async (req, res) => {
  const find = await prisma.northino_tv.findMany({});
  return res.status(200).json(find);
});

router.put("/updateVideo/:id", async (req, res) => {
  const { section_type, video_url, video_title, video_description } = req.body;
  const { id } = req.params;
  const update = await prisma.northino_tv.update({
    where: {
      id: parseInt(id),
    },
    data: {
      section_type,
      video_url,
      video_title,
      video_description,
    },
  });
  res.status(200).json({ success: "Video updated successfully " });
});

router.delete("/deleteVideo/:id", async (req, res) => {
  const { id } = req.params;
  const del = await prisma.northino_tv.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({ err: "Video deleted successfully " });
});

module.exports = router;
