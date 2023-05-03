import { useRef } from 'react';
import { capitalize } from '../util/util';
import { TIPOS_DOC, PROYECTOS } from '../variables/variables';
import './forms.css';
import useStudents from '../hooks/useStudents';
import { Toaster, toast } from 'react-hot-toast';

export default function StudentForm() {

  const form = useRef();
  const codigo = useRef();
  const nombres = useRef();
  const apellidos = useRef();
  const correoPersonal = useRef();
  const tipoDoc = useRef();
  const fechaNacimiento = useRef();
  const documento = useRef();
  const celular = useRef();
  const proyecto = useRef();
  const correoInstitucional = useRef();
  const { insertStudent } = useStudents();

  function handleSubmit(e) {
    e.preventDefault();

    const datos = {
      codigo: codigo.current.value.trim(),
      nombres: capitalize(nombres.current.value.trim()),
      apellidos: capitalize(apellidos.current.value.trim()),
      correoPersonal: correoPersonal.current.value.trim(),
      tipoDocumento: tipoDoc.current.value,
      fechaNacimiento: fechaNacimiento.current.value,
      numDocumento: documento.current.value.trim(),
      numCelular: celular.current.value.trim(),
      proyectoCurricular: proyecto.current.value,
      correoInstitucional: correoInstitucional.current.value.trim(),
    }
    if (insertStudent(datos)) {
      toast.success(`${datos.nombres} ${datos.apellidos} agregado correctamente`)
      form.current.reset();
    }else{
      toast.error(`${nombres} ${apellidos} no se pudo agregar`)
    }
  }

  return (
    <>
      <div><Toaster /></div>
      <form ref={form} className='default-form con-borde' onSubmit={handleSubmit}>
        <input className='con-borde' ref={codigo} type='number' placeholder='Código' required />
        <input className='con-borde' ref={nombres} type='text' placeholder='Nombres' required />
        <input className='con-borde' ref={apellidos} type='text' placeholder='Apellidos' required />
        <input className='con-borde' ref={correoPersonal} type='text' placeholder='Correo personal' required />
        <select className='con-borde' ref={tipoDoc} name="slcTipoDoc" id="slcTipoDoc">
          {Object.keys(TIPOS_DOC).map((key) => <option key={key} value={key}>{TIPOS_DOC[key]}</option>)}
        </select>
        <input className='con-borde' ref={fechaNacimiento} type='date' required />
        <input className='con-borde' ref={documento} type='numbre' placeholder='Número de documento' required />
        <input className='con-borde' ref={celular} type='number' placeholder='Número de celular' required />
        <select className='con-borde' ref={proyecto} name="slcProyectoCurricular" id="slcProyectoCurricular">
          {Object.keys(PROYECTOS).map((key) => <option key={key} value={key}>{PROYECTOS[key]}</option>)}
        </select>
        <input className='con-borde' ref={correoInstitucional} type='text' placeholder='Correo Institucional' required />
        <button className='boton' type="submit">Enviar</button>
      </form>
    </>
  )
}