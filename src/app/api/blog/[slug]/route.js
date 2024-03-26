import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

// get all blog posts
export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    return console.error(error.message);
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    return NextResponse.json("Deleted Successfully");
  } catch (error) {
    return console.error(error.message);
  }
};
