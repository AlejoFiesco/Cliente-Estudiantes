import { useContext, useEffect } from 'react'
import StudentContext from '../context/StudentContext'
import useStudents from '../hooks/useStudents'
import StudentList from '../components/StudentList'
import {Link} from 'wouter'

export default function Home() {

  const {students, setStudents} = useContext(StudentContext)
  const {getStudentsBasico} = useStudents();
  
  useEffect(()=>{
    getStudentsBasico();
  }, [])

  return (
    <>
      <h2>App estudiantes</h2>
      <h5>Estudiantes actuales: {students.length}</h5>
      <Link className='boton' to='/addStudent'>Agregar un estudiante</Link>  
      <StudentList />
    </>
  )
}