import useStudents from "../hooks/useStudents";
import { Link } from 'wouter'

export default function Student(props) {
  const { deleteStudent } = useStudents();

  return (
    <Link to={`/ver/${props[0]}`}>
      <div className="estudiante" >
        {Object.keys(props).map((data, index) => <span key={index}>{props[data]}</span>)}
        <button onClick={() => { deleteStudent(props[0]) }} className='boton delete-color'>Eliminar</button>
      </div>
    </Link>
  )
}