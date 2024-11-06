import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

export default function Header() {
    return (
        
            <Navbar style={{display:'flex', justifyContent:'center'}} expand="xl" variant="dark" bg="dark">
                <Navbar.Brand>Lista de Tareas</Navbar.Brand>
            </Navbar>
       
    )
}
