export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold text-indigo-600 mt-2">{value}</p>
    </div>
  );
}
