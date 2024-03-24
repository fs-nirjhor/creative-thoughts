import { connectToDb } from "@/lib/utils";
import { Post, User } from "@/lib/models";

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};
