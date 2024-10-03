import express from "express";
import BlogEntry from "../models/BlogEntry.js";
import cors from "cors";

const router = express.Router();

router.use(cors({
  origin: "https://troytran.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Include credentials if using cookies or authentication
  allowedHeaders: ["Content-Type", "Authorization"]
}));

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

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const blog = await BlogEntry.findById(id)
    return response.status(200).json(blog)
  }
  catch (error) {
    console.log(error)
    return response.status(500).json({ error: "server error" });
  }
})

export default router;
