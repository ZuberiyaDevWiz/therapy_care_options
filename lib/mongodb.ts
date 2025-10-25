// lib/mongodb.ts
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add the MONGODB_URI environment variable.");
}

const uri = process.env.MONGODB_URI!;

let cached: { client: MongoClient | null; promise: Promise<MongoClient> | null } = {
  client: null,
  promise: null,
};

export async function getMongoClient(): Promise<MongoClient> {
  if (cached.client) return cached.client;

  if (!cached.promise) {
    cached.promise = MongoClient.connect(uri).then((client) => {
      return client;
    });
  }
  cached.client = await cached.promise;
  return cached.client;
}

export async function getDB() {
  const client = await getMongoClient();
  return client.db(); // uses DB name from connection string
}
