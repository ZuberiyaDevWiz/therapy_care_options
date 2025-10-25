// app/api/submissions/[id]/route.ts
import { NextResponse } from "next/server";
import { getDB } from "@/lib/mongodb";
import Submission from "@/app/models/Submission";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await getDB();
    await Submission.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
