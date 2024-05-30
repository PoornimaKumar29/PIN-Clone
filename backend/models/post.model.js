import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  // This should match the model name of your User model
  }
});

export const Post = mongoose.model("Post", postSchema, "posts");