import StudentContext from "../context/StudentContext";
import { useContext } from "react";
import Student from "./Student";
import './lists.css';

export default function StudentList() {
  const { students } = useContext(StudentContext);

  return (
    <div className="lista">
      {students.map((student, index) => <Student key={index} {...student} />)}
    </div>
  )
}