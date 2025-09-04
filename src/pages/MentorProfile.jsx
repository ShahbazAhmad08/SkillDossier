import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { MentorContext } from "../context/MentorContext";

export default function MentorProfile() {
  const { id } = useParams();
  const { mentors } = useContext(MentorContext);

  const mentor = mentors.find((m) => m.id === parseInt(id));

  if (!mentor) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-700 dark:text-gray-300">Mentor not found.</p>
        <Link
          to="/mentors"
          className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 underline"
        >
          ← Back to Mentors
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 transition-colors duration-300">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="w-32 h-32 rounded-full mb-4 object-cover shadow-md"
        />
        <h2 className="text-2xl font-bold mb-2">{mentor.name}</h2>
        <p className="text-gray-600 dark:text-gray-400">{mentor.skill}</p>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          Experience: {mentor.experience}
        </p>
        <p className="mt-1 text-yellow-500 font-medium">⭐ {mentor.rating}</p>

        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
          Connect with {mentor.name}
        </button>

        <Link
          to="/mentors"
          className="mt-6 inline-block text-indigo-600 dark:text-indigo-400 underline"
        >
          ← Back to Mentors
        </Link>
      </div>
    </div>
  );
}
