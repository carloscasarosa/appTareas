import React, { useEffect, useState } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import axios from 'axios'
import { MDBIcon } from 'mdb-react-ui-kit';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function TablaTareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {

    const fectchTareas = async () => {
      try {
        const response = await axios.get("http://localhost:8000/");
        const tareasform = response.data.map(tarea => ({
          ...tarea,
          fecha: new Date(tarea.fecha).toISOString().split('T')[0]
        }))
        setTareas(tareasform);



      } catch (err) {
        console.log('error al solicitar peticion', err)
      }
    }

    fectchTareas();

  }, []);


  async function finalizado(tarea) {
    const id = tarea.id_tareas
    console.log(id);
    try {
      await axios.patch(`http://localhost:8000/${id}`)
      toast.success('Tarea Finalizada!', {
        position:"bottom-center"
      });
      setTimeout(() => {
        window.location.reload()
      }, 3000);

    } catch {
      toast.error('Hubo un inconveniente, discuple las molestias', {
        position:"top-center"
      });
    }
  }


  return (
    <Container className='my-4'>
      <Table style={{ textAlign: 'center' }} striped bordered hover>
        <thead>
          <tr>
            <th>Tarea N°</th>
            <th>Nombre </th>
            <th>Estado</th>
            <th>Dia y Hora</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tareas) => (
            <tr key={tareas.id_tareas}>
              <td>{tareas.id_tareas}</td>
              <td>{tareas.nombre_tarea}</td>
              <td>{tareas.fecha}</td>
              <td>{tareas.estado}</td>
              <td><Button variant="primary" className='mr-3' onClick={() => finalizado(tareas)}><MDBIcon fas icon="chevron-circle-down" size='2x' /></Button>
                <Button variant="danger"><MDBIcon fas icon="trash-alt" size='2x' /></Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </Container>
  )
}
