import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MentorCard({ mentor }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-4 text-center"
    >
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-24 h-24 rounded-full mx-auto mb-3"
      />
      <h3 className="text-lg font-semibold">{mentor.name}</h3>
      <p className="text-sm text-gray-500">{mentor.skill}</p>
      <p className="text-yellow-500">⭐ {mentor.rating}</p>
      <Link to={`/mentors/${mentor.id}`}>
        <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg">
          View Profile
        </button>
      </Link>
    </motion.div>
  );
}
