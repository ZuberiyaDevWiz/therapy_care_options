import mongoose, { Schema, models } from "mongoose";

const submissionSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

// Avoid model recompilation in Next.js hot reload
const Submission = models.Submission || mongoose.model("Submission", submissionSchema);

export default Submission;
