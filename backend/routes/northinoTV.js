const express = require("express");
const prisma = require("../db");
const router = express.Router();
router.post("/addVideo", async (req, res) => {
  const { section_type, video_url, video_title, video_description } = req.body;
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
    res.json({ section_type, video_url, video_title, video_description });
  }
});
router.get("/getVideos", async (req, res) => {
  const find = await prisma.northino_tv.findMany({});
  res.json(find);
});
router.put("/:id", async (req, res) => {
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
  res.status(200).json({ success: "Record updated successfully " });
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const del = await prisma.northino_tv.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({ err: "Record deleted successfully " });
});
module.exports = router;
