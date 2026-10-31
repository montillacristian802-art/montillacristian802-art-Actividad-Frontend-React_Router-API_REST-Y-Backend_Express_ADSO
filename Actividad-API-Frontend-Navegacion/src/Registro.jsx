import { useNavigate } from "react-router-dom"

function Registro() {
    let navigate = useNavigate()
    function llevarLogin() {
        navigate("/")
    }

    return (
        <div>
            <h1>Registrarse</h1>
            <input type="text" placeholder="Escriba nombre completo"/>
            <input type="text" placeholder="Escriba correo"/>
            <input type="password"  placeholder="Escriba contraseña"/>
            <button onClick={llevarLogin}> Volver al Login </button>
        </div>
    )
}

export default Registro