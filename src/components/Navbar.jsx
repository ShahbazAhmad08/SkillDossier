import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md"
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          SkillDossier
        </Link>
      </motion.div>

      {/* Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-50 px-4">
        {["Home", "Mentors", "Dashboard", "About"].map((item, idx) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            whileHover={{ color: "#6366f1" }}
          >
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-indigo-500 transition-colors"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Theme Toggle */}
      {/* <ThemeSwitcher /> */}
    </motion.nav>
  );
}
