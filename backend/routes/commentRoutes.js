import express from "express";
import CommentEntry from "../models/CommentEntry.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const comment = await CommentEntry.find({});
    return response.status(200).json(comment)
  }
  catch (error) {
    console.log(error)
    return response.status(500).json({ error: "server error" });
  }
})
router.post("/add", async (request, response) => {
  try {
    console.log(request.body)
    const item = request.body
    const newComment = {
      name: item.name,
      text: item.text
    }

    const commentInstance = new CommentEntry(newComment)
    await commentInstance.save()
    return response.json(commentInstance)

  }
  catch (error) {
    console.log(error)
    return response.status(400).json({ error: "failed post" })
  }
})

// router.get("/:id", async (request, response) => {
//   try {
//     const { id } = request.params;
//     const blog = await BlogEntry.findById(id)
//     return response.status(200).json(blog)
//   }
//   catch (error) {
//     console.log(error)
//     return response.status(500).json({ error: "server error" });
//   }
// })

export default router;
