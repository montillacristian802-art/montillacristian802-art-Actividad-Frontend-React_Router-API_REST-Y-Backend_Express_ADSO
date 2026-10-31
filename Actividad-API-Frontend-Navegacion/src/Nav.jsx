import { Link } from "react-router-dom"

function Nav() {

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/contactos">Contactos</Link></li>
                    <li><Link to="/registro">Registros</Link></li>
                    <li><Link to="/">Regresar al Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav