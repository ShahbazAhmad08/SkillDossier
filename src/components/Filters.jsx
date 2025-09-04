export default function Filters({ onFilter }) {
  return (
    <div className="flex space-x-4 mt-4">
      <select
        onChange={(e) => onFilter("skill", e.target.value)}
        className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      >
        <option value="">All Skills</option>
        <option value="Web Development">Web Development</option>
        <option value="Data Science">Data Science</option>
        <option value="UI/UX">UI/UX</option>
      </select>

      <select
        onChange={(e) => onFilter("experience", e.target.value)}
        className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      >
        <option value="">All Experience</option>
        <option value="1-3">1-3 Years</option>
        <option value="3-5">3-5 Years</option>
        <option value="5+">5+ Years</option>
      </select>
    </div>
  );
}
