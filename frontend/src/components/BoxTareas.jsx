import React, { useState } from 'react'
import { Button, Container, Form, Col, Row } from 'react-bootstrap'
import Calendar from 'react-calendar'
import axios from 'axios'

export default function BoxTareas() {
  const [calendario, setCalendario] = useState(false);
  const [tarea,setTarea] = useState('');
  const [fecha, setFecha]= useState('');

  function tomarNombre(e){
   setTarea(e.target.value);
   

  }

  function tomarFecha(value){
    setFecha(value);
    setCalendario(false);

  }

  const mostrarCalendar = ()=>{
    setCalendario(true);
  } 

  const nuevaTarea= async()=>{
    const estado= "pendiente";
      try{
          // Convertir fecha a un formato de cadena si es Date
           const fechaStr = fecha.toISOString().split('T')[0];
           console.log(fechaStr);
           const response= await axios.post("http://localhost:8000/", {
            nombre_tarea: tarea,
            fecha:fechaStr,
            estado});
           console.log('tarea enviada', response.data);
           window.location.reload();
      }catch (error){
        console.log('error al enviar la tarea', error);

      }

  }
 
  return (

    <div className='formTarea'>
      <Form>
        <Row className='mb-3'>
          <Col xl={12}>
              <input className='w-100'
                     id='tarea' 
                    type='text' 
                    placeholder='Nueva Tarea'
                    value={tarea} 
                    onChange={tomarNombre}/>
          </Col>
        </Row>

        <Row className='mb-3'>
          <Col>
            <input placeholder='fecha' 
                  className='my-2 mr-3'
                  value={fecha ? fecha.toLocaleDateString() : ''}  //esto muestra la fecha seleccionada
                  readOnly/>
            <Button variant='info'onClick={mostrarCalendar} > fecha de la tarea</Button>
          </Col>
           { calendario && (
             <div className='calendar-container'>
                <Calendar
                  onChange={tomarFecha}
                  value={fecha || new Date()}  //muestra la fecha actual
            
                />

             </div>)}
        </Row>
        <Button variant='success' onClick={nuevaTarea} >Nueva Tarea</Button>
      </Form>
    </div>
  )
}
