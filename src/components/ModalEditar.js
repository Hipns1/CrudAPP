import React from "react";
import {Modal, Stack, Button, Form} from "react-bootstrap";
import añadirProducto from "../functions/añadirProducto";

function ModalEditar( {isModalEditar, 
                        setIsModalEditar, 
                        actualizarEstadoProductos,   
                        productoEditar, 
                        setProductoEditar} ) {


    /* Funcion para añadir productos desde el modal */
    function editarProductoModal() {
        //Obtener la informacion del formulario
        const titulo = document.getElementById("titulo").value;
        const precio = document.getElementById("precio").value;
        const cantidad = document.getElementById("cantidad").value;
        const sku = document.getElementById("sku").value;

        //Enviar informacion a Firebase
        const infoProducto = { titulo, precio, cantidad, sku};
        añadirProducto(infoProducto);

        //Regresar estado a false
        setProductoEditar(null);

        //Cerrer el modal
        actualizarEstadoProductos();
        setIsModalEditar(false);

    }

    const [productoEstado, setProductoEstado] = React.useState({...productoEditar});

    return (
        <Modal show={isModalEditar} onHide={() => {setIsModalEditar(false) 
                                                    setProductoEditar(null)}}>
            
            <Modal.Header>
                <Modal.Title className="text-primary">Editar producto</Modal.Title>  
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Stack>
                        <Form.Control className="mb-1" id="titulo" placeholder="titulo" type="text" 
                                        value={productoEstado?.titulo} 
                                        onChange={(e) =>
                                            setProductoEstado({
                                            ...productoEstado,
                                            titulo: e.target.value,
                                            })
                                        }/>
                        <Form.Control className="mb-1" id="precio" placeholder="precio" type="number" 
                                        value={productoEstado?.precio}
                                        onChange={(e) =>
                                            setProductoEstado({
                                            ...productoEstado,
                                            precio: e.target.value,
                                            })
                                        }/>
                        <Form.Control className="mb-1" id="cantidad" placeholder="cantidad" type="number"
                                        value={productoEstado?.cantidad} 
                                        onChange={(e) =>
                                            setProductoEstado({
                                            ...productoEstado,
                                            cantidad: e.target.value,
                                            })
                                        }/>
                        <Form.Control className="mb-1" id="sku" placeholder="Sku" type="text" 
                                        value={productoEstado?.sku}
                                        onChange={(e) =>
                                            setProductoEstado({
                                            ...productoEstado,
                                            sku: e.target.value,
                                            })
                                        }/>
                    </Stack>
                </Form>
            </Modal.Body>    

            <Modal.Footer>
                <Button onClick={() => {setIsModalEditar(false) 
                                        setProductoEditar(null)}}> Cancelar</Button> 
                <Button onClick={editarProductoModal}>Editar</Button>   
            </Modal.Footer>        

        </Modal>
    )
}

export default ModalEditar;
