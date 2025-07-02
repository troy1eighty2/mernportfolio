import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    name: {
      type: String
    },
    text: {
      type: String,
      required: true
    },
    ip: {
      type: String,
      required: false
    },

  },
  {
    timestamps: true,
  }
);

const CommentEntry = mongoose.model("CommentEntry", commentSchema);
export default CommentEntry;
