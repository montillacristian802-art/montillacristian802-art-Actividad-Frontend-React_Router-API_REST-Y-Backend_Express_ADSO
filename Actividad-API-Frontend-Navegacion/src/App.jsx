import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

import Login from "./Login"
import Registro from "./Registro"
import Dashboard from "./Dashboard"
import Productos from "./Productos"
import Contactos from "./Contactos"
import Nav from "./Nav"
import './App.css'

function App() {
  

  return (
    <BrowserRouter>  
    <Nav></Nav>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/logeo' element={<Login></Login>}></Route>
        <Route path='/registro' element={<Registro></Registro>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/productos' element={<Productos></Productos>}></Route>
        <Route path='/contactos' element={<Contactos></Contactos>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
