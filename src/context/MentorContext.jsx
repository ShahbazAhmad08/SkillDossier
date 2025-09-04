import { createContext, useState } from "react";
import mentorsData from "../data/mentors.json"; // dummy data file

export const MentorContext = createContext();

export default function MentorProvider({ children }) {
  const [mentors, setMentors] = useState(mentorsData);

  return (
    <MentorContext.Provider value={{ mentors, setMentors }}>
      {children}
    </MentorContext.Provider>
  );
}
