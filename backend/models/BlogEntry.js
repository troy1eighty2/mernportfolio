import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    blurb: {
      type: String,
      required: true
    },
    content: {
      type: Array,
      required: true,

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
