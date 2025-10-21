import express from "express";
import BlogEntry from "../models/BlogEntry.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const blog = await BlogEntry.find({});
    return response.status(200).json(blog)
  }
  catch (error) {
    console.log(error)
    return response.status(500).json({ error: "server error" });
  }
})

router.get("/:title", async (request, response) => {
  try {
    const { title } = request.params;
    const blog = await BlogEntry.findOne({title: title})
    return response.status(200).json(blog)
  }
  catch (error) {
    console.log(error)
    return response.status(500).json({ error: "server error" });
  }
})

export default router;
