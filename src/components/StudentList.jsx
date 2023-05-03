import StudentContext from "../context/StudentContext";
import { useContext } from "react";
import Student from "./Student";
import './lists.css';

export default function StudentList() {
  const { students } = useContext(StudentContext);

  return (
    <div className="lista">
      <div className="list-header">
        <h4>Código</h4>
        <h4>Nombres</h4>
        <h4>Apellidos</h4>
        <h4>Correo personal</h4>
        <h4>Eliminar</h4>
      </div>
      {students.map((student, index) => <Student key={index} {...student} />)}
    </div>
  )
}