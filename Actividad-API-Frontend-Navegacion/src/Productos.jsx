import { useState } from "react"

function Productos() {

    const [nombre, setNombre] = useState("")
    const [categoria, setCategoria] = useState("")
    const [precio, setPrecio] = useState("")
    const [cantidad, setCantidad] = useState("")

    const [productos, setProductos] = useState([])

    async function guardar() {

        if (nombre === "" || categoria === "" || precio === "" || cantidad === "") {
            alert("Complete todos los campos")
        } else if (precio < 0) {
            alert("El precio no puede ser negativo")
        } else if (cantidad < 0) {
            alert("La cantidad no puede ser negativa")
        } else {

            try {

                let respuesta = await fetch("http://localhost:3000/productos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify({
                        nombre: nombre,
                        categoria: categoria,
                        precio: precio,
                        cantidad: cantidad
                    })
                })

                let datos = await respuesta.json()

                if (respuesta.ok) {

                    alert(datos.mensaje)

                    setNombre("")
                    setCategoria("")
                    setPrecio("")
                    setCantidad("")
                    consultar()

                } else {

                    alert(datos.mensaje)

                }
            } catch (error) {

                alert("Error de conexión con el servidor")
            }
        }
    }

    async function consultar() {

        try {

            let respuesta = await fetch("http://localhost:3000/productos")
            let datos = await respuesta.json()
            if (respuesta.ok) {
                setProductos(datos)
                if (datos.length === 0) {
                    alert("No hay productos registrados")
                }
            } else {
                alert("Error al consultar los productos")
            }
        } catch (error) {
            alert("Error de conexión con el servidor")
        }
    }
    
    return (

        <div>
            <h1>Productos</h1>
            <h2>Registrar producto</h2>

            <input type="text" placeholder="Nombre del producto" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            <br />
            <input type="text" placeholder="Categoría" value={categoria} onChange={(e)=>setCategoria(e.target.value)}/>
            <br />
            <input type="number" placeholder="Precio" value={precio} onChange={(e)=>setPrecio(e.target.value)} />
            <br />
            <input type="number" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)}/>
            <br />
            <button onClick={guardar}> Registrar producto </button>



            <h2>Consultar productos</h2>

            <button onClick={consultar}> Consultar productos </button>

            <table border="1">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>

                <tbody>

                    {productos.map((producto) => (

                        <tr>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.categoria}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.cantidad}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Productos
