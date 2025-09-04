export default function RecommendationCard({ name, skill }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 dark:text-gray-400">{skill}</p>
      <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg">
        View Profile
      </button>
    </div>
  );
}
