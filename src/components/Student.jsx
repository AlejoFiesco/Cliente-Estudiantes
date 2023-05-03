import StudentContext from "../context/StudentContext"
import { useContext } from "react"
import { useLocation } from "wouter";

export default function Student(props) {
  const { students, setStudents } = useContext(StudentContext);
  const [location, setLocation] = useLocation();

  function deleteStudent() {
    const filtrado = students.filter((student) => student[0] !== props[0]);
    setStudents(filtrado);
  }


  return (
    <div className="estudiante">
      {Object.keys(props).map((data, index) => <span key={index}>{props[data]}</span>)}
      <button onClick={deleteStudent} className='boton delete-color'>Eliminar</button>
    </div>
  )
}