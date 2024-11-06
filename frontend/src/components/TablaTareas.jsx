import React from 'react'
import {Container, Table} from 'react-bootstrap'

export default function TablaTareas() {
  return (
    <Container className='my-4'>
      <Table style={{textAlign:'center'}}striped bordered hover>
  <thead>
    <tr>
      <th>Tarea N°</th>
      <th>Nombre </th>
      <th>Estado</th>
      <th>Dia y Hora</th>
      <th>Fecha de caducidad</th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>
</Table>

    </Container>
  )
}
