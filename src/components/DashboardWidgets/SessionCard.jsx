export default function SessionCard({ mentor, date }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6">
      <p className="font-semibold">{mentor}</p>
      <p className="text-gray-600 dark:text-gray-400">Session Date: {date}</p>
      <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg">
        Join Session
      </button>
    </div>
  );
}
