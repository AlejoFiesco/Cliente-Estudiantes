import { useContext } from "react";
import StudentContext from "../context/StudentContext";

export default function useStudents() {
  const HOST = 'http://localhost:5000/';
  const { students, setStudents } = useContext(StudentContext);


  function getStudentsBasico() {
    const ACTION = 'buscarBasico';
    let URL = `${HOST}${ACTION}`;
    fetch(URL)
      .then(res => res.json())
      .then(res => setStudents(res.rows))
  }

  async function getStudent(id) {
    const ACTION = 'buscar/' + id;
    let URL = `${HOST}${ACTION}`;
    let result = await fetch(URL)
      .then(res => res.json())
      .then(res => res.rows)
    return result;
  }

  async function updateStudent(datos){
    const ACTION = 'actualizar';
    let URL = `${HOST}${ACTION}`;
    const result = fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          getStudentsBasico();
          return true;
        }
      })
      .catch(res => false)
      return result;
  }

  async function insertStudent(datos) {
    const ACTION = 'insertar';
    let URL = `${HOST}${ACTION}`;
    const result = fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          setStudents([...students,
          [datos.codigo, datos.nombres, datos.apellidos, datos.correoInstitucional]
          ]
          )
          return true;
        }
      })
      .catch(res => false)
      return result;
  }

  async function deleteStudent(codigo) {
    const ACTION = 'eliminar/';
    let URL = `${HOST}${ACTION}${codigo}`;
    const result = fetch(URL)
      .then(res => res.json())
      .then(res => {
        if (res) {
          const filtrado = students.filter((student) => student[0] !== codigo);
          setStudents(filtrado)
          return true;
        }
      })
      .catch(res => false)
      return result;
  }

  return { getStudent, getStudentsBasico, insertStudent, deleteStudent, updateStudent }
}