export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-10 text-center">
      <p className="text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} SkillDossier. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-indigo-500">
          LinkedIn
        </a>
        <a href="#" className="text-indigo-500">
          Twitter
        </a>
        <a href="#" className="text-indigo-500">
          GitHub
        </a>
      </div>
    </footer>
  );
}
