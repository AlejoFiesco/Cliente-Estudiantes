import { createContext, useState } from "react";
import useStudents from "../hooks/useStudents";
const StudentContext = createContext({})

export function StudentProvider({children}) {

  const [students, setStudents] = useState([]);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  )
}
export default StudentContext;