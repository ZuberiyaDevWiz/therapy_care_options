// app/admin/submissions/page.tsx
import { getDB } from "@/lib/mongodb";
import Image from "next/image";

type Submission = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export default async function SubmissionsPage() {
  const db = await getDB();
  const subs = await db
    .collection("submissions")
    .find({})
    .sort({ createdAt: -1 })
    .limit(200)
    .toArray();

  // Serialize dates
  const submissions = subs.map((s) => ({
    _id: s._id.toString(),
    firstName: s.firstName,
    lastName: s.lastName,
    email: s.email,
    phone: s.phone,
    message: s.message,
    createdAt: s.createdAt ? new Date(s.createdAt).toLocaleString() : "",
  }));

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Contact Form Submissions</h1>

        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Date</th>
                  <th className="py-2">Name</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Phone</th>
                  <th className="py-2">Message</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s._id} className="border-b last:border-b-0">
                    <td className="py-3 align-top text-sm">{s.createdAt}</td>
                    <td className="py-3 align-top">{s.firstName} {s.lastName}</td>
                    <td className="py-3 align-top">{s.email}</td>
                    <td className="py-3 align-top">{s.phone}</td>
                    <td className="py-3 align-top max-w-xl wrap-break-word">{s.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
