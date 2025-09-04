import SessionCard from "../components/DashboardWidgets/SessionCard";
import RecommendationCard from "../components/DashboardWidgets/RecommendationCard";
import StatsCard from "../components/DashboardWidgets/StatsCard";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>

      {/* Stats Section */}
      <div className="grid sm:grid-cols-3 gap-6 mb-6">
        <StatsCard title="Mentors Connected" value="5" />
        <StatsCard title="Sessions Completed" value="12" />
        <StatsCard title="Upcoming Sessions" value="2" />
      </div>

      {/* Upcoming Sessions */}
      <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <SessionCard mentor="Neha Verma" date="Sep 10, 2025" />
        <SessionCard mentor="Karan Mehta" date="Sep 15, 2025" />
      </div>

      {/* Recommendations */}
      <h2 className="text-xl font-semibold mb-4">Recommended Mentors</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <RecommendationCard name="Aarav Sharma" skill="Web Development" />
        <RecommendationCard name="Sneha Gupta" skill="Data Science" />
      </div>
    </div>
  );
}
