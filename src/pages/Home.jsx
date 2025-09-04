import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MentorContext } from "../context/MentorContext";
import { useContext } from "react";

const dummyData = {
  features: [
    {
      title: "Expert Guidance",
      desc: "Learn directly from industry professionals with years of real-world experience.",
      icon: "🎓",
    },
    {
      title: "Personalized Mentorship",
      desc: "Get one-on-one support tailored to your career path and learning style.",
      icon: "🤝",
    },
    {
      title: "Career Growth",
      desc: "Unlock opportunities, expand your network, and reach your full potential.",
      icon: "🚀",
    },
  ],
  // mentors: [
  //   {
  //     name: "Aisha Khan",
  //     skill: "Software Engineer @ Google",
  //     img: "https://randomuser.me/api/portraits/women/44.jpg",
  //   },
  //   {
  //     name: "Ravi Sharma",
  //     skill: "Data Scientist @ Microsoft",
  //     img: "https://randomuser.me/api/portraits/men/32.jpg",
  //   },
  //   {
  //     name: "Sophia Lee",
  //     skill: "Product Manager @ Amazon",
  //     img: "https://randomuser.me/api/portraits/women/68.jpg",
  //   },
  // ],
};

export default function Home() {
  const { mentors } = useContext(MentorContext);
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="text-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-extrabold leading-tight"
        >
          Empower Your Growth with{" "}
          <span className="text-indigo-600">Mentorship</span>
        </motion.h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Connect with experienced mentors who can guide you on your career
          journey, share insights, and help you achieve your goals.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/mentors"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Find a Mentor
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {dummyData.features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Mentor Showcase */}
      <section className="px-6 py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-3xl font-bold text-center mb-10">
          Meet Our Top Mentors
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {mentors.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{m.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{m.skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center px-6 py-20 bg-indigo-400 text-white dark:bg-indigo-800 transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-4">
          Ready to take the next step in your career?
        </h2>
        <p className="text-gray-100 mb-8 max-w-xl mx-auto">
          Join our mentorship community today and start learning from the best.
        </p>
        <Link
          to="/mentors"
          className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
