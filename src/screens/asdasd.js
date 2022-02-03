<Container>

            <Button onClick={() => signOut(auth)}>Cerrar sesión</Button>
            <hr />
            <p>Bienvenido,  {user.email} </p>

            <form>
                <input type="text" id="busqueda" placeholder="buscar"/>
                <button type="submit">Buscar</button>
                <Button>Resetear</Button>
            </form>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>SKU</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { productos && productos.map((producto, index) =>(
                        <tr key={index}>
                            <td> {index +1} </td>
                            <td> {producto.titulo} </td>
                            <td> {producto.precio} </td>
                            <td> {producto.cantidad} </td>
                            <td> {producto.sku} </td>
                            <td> 
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button onClick={añadirProductoHome}> Añadir producto </Button>
            </Container>