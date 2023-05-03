import StudentForm from "../components/StudentForm";
import { useRoute } from "wouter";

export default function CreateStudent() {

  const [match, params] = useRoute('/ver/:codigo');

  return (
    <>
      <h2>{params?.codigo ? 'Editar estudiante' :'Agregar estudiante'}</h2>
      <StudentForm id={params?.codigo}/>
    </>
  )
}


