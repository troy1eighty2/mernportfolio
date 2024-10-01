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
  }
})

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const blog = await BlogEntry.findById(id)
    return response.status(200).json(blog)
  }
  catch (error) {
    console.log(error)
  }
})

export default router;
