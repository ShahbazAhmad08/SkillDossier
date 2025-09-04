export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search mentors by name or skill..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
    />
  );
}
