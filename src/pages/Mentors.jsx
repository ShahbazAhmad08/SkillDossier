import { useContext, useState } from "react";
import { MentorContext } from "../context/MentorContext";
import MentorCard from "../components/MentorCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

export default function Mentors() {
  const { mentors } = useContext(MentorContext);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ skill: "", experience: "" });

  // filter logic
  const filteredMentors = mentors.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.skill.toLowerCase().includes(search.toLowerCase());

    const matchesSkill = filters.skill ? m.skill === filters.skill : true;
    const matchesExperience = filters.experience
      ? m.experience === filters.experience
      : true;

    return matchesSearch && matchesSkill && matchesExperience;
  });

  const handleFilter = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  return (
    <div className="p-6 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-4">Find a Mentor</h1>
      <SearchBar value={search} onChange={setSearch} />
      <Filters onFilter={handleFilter} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredMentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}
