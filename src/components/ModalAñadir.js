import {Modal, Stack, Button, Form} from "react-bootstrap";
import añadirProducto from "../functions/añadirProducto";

function ModalAñadir( {isModalAñadir, setIsModalAñadir, actualizarEstadoProductos} ) {


    /* Funcion para añadir productos desde el modal */
    function añadirProductoModal() {
        //Obtener la informacion del formulario
        const titulo = document.getElementById("titulo").value;
        const precio = document.getElementById("precio").value;
        const cantidad = document.getElementById("cantidad").value;
        const sku = document.getElementById("sku").value;

        //Enviar informacion a Firebase
        const infoProducto = { titulo, precio, cantidad, sku};
        añadirProducto(infoProducto);

        //Cerrer el modal
        actualizarEstadoProductos();
        setIsModalAñadir(false);

    }


    return (
        <Modal show={isModalAñadir} onHide={() => setIsModalAñadir(false)}>
            
            <Modal.Header>
               <Modal.Title className="text-primary">Añadir producto</Modal.Title>  
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Stack>
                        <Form.Control className="mb-1" id="titulo" placeholder="titulo" type="text" />
                        <Form.Control className="mb-1" id="precio" placeholder="precio" type="number" />
                        <Form.Control className="mb-1" id="cantidad" placeholder="cantidad" type="number" />
                        <Form.Control className="mb-1" id="sku" placeholder="Sku" type="text" />
                    </Stack>
                </Form>
            </Modal.Body>    

            <Modal.Footer>
                <Button onClick={() => setIsModalAñadir(false)}> Cancelar</Button> 
                <Button onClick={añadirProductoModal}>Añadir</Button>   
            </Modal.Footer>        

        </Modal>
    )
}

export default ModalAñadir
