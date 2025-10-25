// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable inside .env.local");
}

let isConnected = false; // global flag to prevent multiple connections

export async function getDB() {
  if (isConnected) {
    return mongoose.connection;
  }

  try {
    // Use non-null assertion (!) to satisfy TypeScript
    const conn = await mongoose.connect(MONGODB_URI!);
    isConnected = true;
    console.log("✅ Connected to MongoDB");
    return conn.connection;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}
