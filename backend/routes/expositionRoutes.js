import express from "express";
import BlogEntry from "../models/BlogEntry.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const blog = await BlogEntry.find({});
    console.log("yes")
    return response.status(200).json(blog)
  }
  catch (error) {
    console.log(error)
  }
})

export default router;
