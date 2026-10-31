import { useNavigate } from "react-router-dom"

function Login() {

    let navigate = useNavigate()
    function llevarDash() {
        navigate("/dashboard")
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Escriba correo"/>
            <input type="password" placeholder="Escriba contraseña"/>
            <button onClick={llevarDash}> Ingresar </button>
        </div>
    )
}

export default Login