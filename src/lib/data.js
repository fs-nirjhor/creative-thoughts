import { connectToDb } from "@/lib/utils";
import { Post, User } from "@/lib/models";
//import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    //noStore(); // no store cache
    connectToDb();
    /* 
    // fetch from database
    const posts = await Post.find();
    return posts; 
    */
    // fetch from API
    const posts = await fetch("http://localhost:3000/api/blog", {
      next: { revalidate: 60 },
    });
    return posts.json();
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    /* 
    // fetch from database
    const post = await Post.findOne({ slug: slug });
    return post; 
    */
    // fetch from API
    const post = await fetch(`http://localhost:3000/api/blog/${slug}`);
    return post.json();
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};

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
