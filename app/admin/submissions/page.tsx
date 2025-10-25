"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import Link from "next/link";

type Submission = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export const dynamic = "force-dynamic";

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🧩 Fetch submissions
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch("/api/submissions", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch submissions");

        const data = await res.json();

        const formatted = data.map((s: any) => ({
          ...s,
          createdAt: s.createdAt
            ? format(new Date(s.createdAt), "MMM d, yyyy h:mm a")
            : "",
        }));

        setSubmissions(formatted);
      } catch (err: any) {
        console.error("Error fetching submissions:", err);
        setError("Server error while loading submissions.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  // 🧩 Handle delete button click
  const handleDelete = (id: string) => {
    setConfirmDeleteId(id);
  };

  // 🧩 Confirm delete
  const confirmDelete = async () => {
    if (!confirmDeleteId) return;
    setDeleting(true);
    setError(null);

    try {
      console.log("Deleting ID:", confirmDeleteId); // 🪶 Debug check

      const res = await fetch(`/api/submissions/${confirmDeleteId}`, {
        method: "DELETE",
      });

      const responseData = await res.json();
      console.log("Delete response:", responseData);

      if (!res.ok) {
        throw new Error(responseData.error || "Failed to delete submission");
      }

      // ✅ Remove deleted record from UI
      setSubmissions((prev) =>
        prev.filter((item) => item._id !== confirmDeleteId)
      );
      setConfirmDeleteId(null);
    } catch (err: any) {
      console.error("Delete error:", err);
      setError("Failed to delete entry. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  const cancelDelete = () => {
    setConfirmDeleteId(null);
    setError(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500 text-lg">
        Loading submissions...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative">
      {/* Navbar */}
      <nav className="bg-[#fafafa] shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 py-3 gap-3 md:gap-0">
          <Link href="/" target="_blank">
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <img
                src="/images/therapy_logo.png"
                alt="therapy logo"
                className="w-32 sm:w-40 h-auto"
              />
            </div>
          </Link>

          <h1 className="text-2xl sm:text-3xl font-poppins text-[#5b2d91] font-semibold text-center">
            ADMIN DASHBOARD
          </h1>

          <div className="text-sm text-gray-600 opacity-80 md:pr-6 hidden sm:block">
            v1.0
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100 overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              📬 Contact Form Submissions
            </h1>
            <span className="text-sm text-gray-500">
              Total: {submissions.length}
            </span>
          </div>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-md mb-4 text-sm">
              {error}
            </div>
          )}

          {submissions.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <p className="text-lg">No submissions yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full text-sm sm:text-base table-fixed">
                <thead className="bg-gray-100/80 font-poppins uppercase ">
                  <tr>
                    <th className="w-12 sm:w-16 py-3 px-3 sm:px-4 text-left font-medium">
                      #
                    </th>
                    <th className="w-40 py-3 px-3 sm:px-4 text-left font-medium">
                      Date
                    </th>
                    <th className="w-40 py-3 px-3 sm:px-4 text-left font-medium">
                      Name
                    </th>
                    <th className="w-48 py-3 px-3 sm:px-4 text-left font-medium">
                      Email
                    </th>
                    <th className="w-32 py-3 px-3 sm:px-4 text-left font-medium">
                      Phone
                    </th>
                    <th className="w-[400px] py-3 px-3 sm:px-4 text-left font-medium">
                      Message
                    </th>
                    <th className="w-24 py-3 px-3 sm:px-4 text-center font-medium">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((s, i) => (
                    <tr
                      key={s._id}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition ${
                        i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="py-3 px-3 sm:px-4 text-gray-600">
                        {i + 1}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-gray-600 whitespace-nowrap">
                        {s.createdAt}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-gray-800 font-medium truncate">
                        {s.firstName} {s.lastName}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-blue-600 hover:underline truncate">
                        <a href={`mailto:${s.email}`}>{s.email}</a>
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700">
                        {s.phone}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-gray-700 max-w-[400px] overflow-hidden text-ellipsis break-words">
                        {s.message}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-center">
                        <button
                          onClick={() => handleDelete(s._id)}
                          className="px-3 py-1.5 text-sm bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* 🧩 Delete Confirmation Modal */}
      {confirmDeleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] sm:w-96 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Confirm Delete
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Are you sure you want to delete this entry? <br />
              <span className="font-medium text-red-500">
                (This will permanently remove it from the database.)
              </span>
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className={`px-4 py-2 rounded-md text-white transition ${
                  deleting
                    ? "bg-red-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
