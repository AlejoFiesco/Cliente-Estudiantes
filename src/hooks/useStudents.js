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

  function getStudent(id) {
    const ACTION = 'buscar/' + id;
    let URL = `${HOST}${ACTION}`;
    fetch(URL)
      .then(res => res.json())
      .then(res => setStudents(res.rows))
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

  return { getStudentsBasico, insertStudent }
}