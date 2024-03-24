import { connect } from "mongoose";
import { mongoUri } from "@/lib/secret";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return console.log("Using existing connection");
    }
    const db = await connect(mongoUri);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error.message);
    throw new Error(error);
  }
};
