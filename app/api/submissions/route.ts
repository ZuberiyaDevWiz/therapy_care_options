// app/api/submissions/route.ts
import { NextResponse } from "next/server";
import { getDB } from "@/lib/mongodb";
import Submission from "@/app/models/Submission";

export async function GET() {
  try {
    await getDB(); // connect to MongoDB
    const subs = await Submission.find({})
      .sort({ createdAt: -1 })
      .limit(200)
      .lean();

    return NextResponse.json(subs);
  } catch (error) {
    console.error("GET /api/submissions error:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
