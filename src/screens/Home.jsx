import React from 'react';
import firebaseApp from '../firebase/credenciales';
import { getAuth, signOut } from 'firebase/auth';
import getAllProducts from "../functions/getAllProducts";
import eliminarProductoHome from "../functions/eliminarProductoHome";
import filtrarDatos from '../functions/filtrarDatos';
import { Container, Form, Stack, Button } from 'react-bootstrap';

//Importar modales
import ModalEditar from "../components/ModalEditar";
import ModalAñadir from "../components/ModalAñadir";

//Importar estilos CSS
import styles from "../styles/styleHome.module.css";
import BotonLogOut from "../styles/images/logouticon.png";
import logoAñadir from "../styles/images/add.png"


const auth = getAuth(firebaseApp);


const Home = ({user}) => {       

    const [productos, setProductos] = React.useState([]);
    const [isModalAñadir, setIsModalAñadir] = React.useState(false);
    const [isModalEditar, setIsModalEditar] = React.useState(false);
    const [productoEditar, setProductoEditar] = React.useState({});


    /* Funcion para buscar productos */
    async function busquedaFormHandler(e) {
        e.preventDefault();
        const busqueda = e.target.busqueda.value;
        const nvosDocus = await filtrarDatos(busqueda);
        setProductos(nvosDocus);
    }


    /* Guardar productos de la base de datos en el estado */
    function actualizarEstadoProductos(){
        getAllProducts().then((productos) => {
            setProductos(productos);
        })
    }
    React.useEffect(() => {
        actualizarEstadoProductos()
    }, [])


    /* Funcion para el boton de agregar productos */
    function añadirProductoHome(){
        setIsModalAñadir(true);
    }




    return(
        <div>

            <Container>
                {/* Llamada de modales */}
                <ModalAñadir isModalAñadir={isModalAñadir} 
                                setIsModalAñadir={setIsModalAñadir}
                                actualizarEstadoProductos={actualizarEstadoProductos} />

                {productoEditar && (<ModalEditar isModalEditar={isModalEditar} 
                                                    setIsModalEditar={setIsModalEditar}
                                                    actualizarEstadoProductos={actualizarEstadoProductos}
                                                    productoEditar={productoEditar} 
                                                    setProductoEditar={setProductoEditar} />)}
            </Container>

            {/*Boton de cerrar sesion y texto de bienvenida*/}
            <div className={styles.encabezadoHome}>
                <p>Bienvenido, { user.email }</p>
                <button className={styles.botonHomeLogOut} onClick={() => signOut(auth)}>
                    Cerrar sesión
                    <img src={BotonLogOut} alt=""></img>
                </button>
                
            </div>


            {/* formulario de busqueda */}
            <div className={styles.textData}>
                <h1>Database</h1>
            </div>

            <Form className={styles.formBusqueda} onSubmit={busquedaFormHandler}>
                <Stack direction="horizontal">
                    <Form.Group controlId="busqueda">
                        <Form.Control className={styles.campoBusqueda} type="text" placeholder="Buscar"/>
                    </Form.Group>
                    <Button className={styles.btnBuscar} type="submit"></Button>
                    <Button className={styles.btnResetear} onClick={() => {
                        const input = document.getElementById("busqueda");
                        input.value = "";
                        actualizarEstadoProductos()
                    }}></Button>
                </Stack>
            </Form>
 
            
            {/* Formulario del crud, ingresar, eliminar y visualizar producto */}
            <div className={styles.containerForm}>
                <table>
                    <thead >
                        <tr className={styles.head}>
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
                                <td> {index + 1} </td>
                                <td> {producto.titulo} </td>
                                <td> {producto.precio} </td>
                                <td> {producto.cantidad} </td>
                                <td> {producto.sku} </td>
                                <td> 
                                    
                                    <button className={styles.btnEditar} onClick={() => {setProductoEditar({...producto}) 
                                                            setIsModalEditar(true)         
                                        }}>
                                    </button>

                                    <button className={styles.btnEliminar} onClick={() => {
                                        eliminarProductoHome(producto).then((confirmacion) =>{
                                            actualizarEstadoProductos();
                                        });
                                        
                                        }}>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Botones para añadir productos desde el modal */}
            <div className={styles.containerBtnAñadir}>
                <button className={styles.btnAñadir} onClick={añadirProductoHome}>
                    Añadir producto
                    <img src={logoAñadir} alt="" />
                </button>
            </div>
        
        </div>
    )} 

export default Home;
