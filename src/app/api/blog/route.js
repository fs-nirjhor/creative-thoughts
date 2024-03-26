// blog routes

import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

// get all blog posts
export const GET = async (request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    return console.error(error.message);
  }
};

export const POST = async (request) => {
  try {
    const data = await request.json();
    connectToDb();
    const newPost = await Post.create(data);
    return NextResponse.json(newPost);
  } catch (error) {
    return console.error(error.message);
  }
};

export const DELETE = async (request) => {
  try {
    const { id } = await request.json();
    connectToDb();
    const deletedPost = await Post.findByIdAndDelete(id);
    return NextResponse.json(deletedPost);
  } catch (error) {
    return console.error(error.message);
  }
};
