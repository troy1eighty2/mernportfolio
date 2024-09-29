import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },

  },
  {
    timestamps: true,
  }
);

const BlogEntry = mongoose.model("BlogEntry", blogSchema);
export default BlogEntry;
