import { connectToDb } from "@/lib/utils";
import { Post, User } from "@/lib/models";
import { baseUrl } from "@/lib/secret";
//import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    //noStore(); // no store cache
    /* 
    // fetch from database
    connectToDb();
    const posts = await Post.find();
    return posts; 
    */
    // fetch from API
    const posts = await fetch(`${baseUrl}/api/blog`, {
      next: { revalidate: 60 },
    });
    return posts.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = async (slug) => {
  try {
    /* 
    // fetch from database
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    return post; 
    */
    // fetch from API
    const post = await fetch(`${baseUrl}/api/blog/${slug}`);
    return post.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = async (id) => {
  try {
    /* 
    // fetch from database
    connectToDb();
    const user = await User.findById(id);
    return user; 
    */
    // fetch from API
    const user = await fetch(`${baseUrl}/api/user/${id}`);
    return user.json();
  } catch (error) {
    console.log(error.message);
  }
};
