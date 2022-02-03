import firebaseApp from "../firebase/credenciales";
import { getFirestore, deleteDoc, collection, doc } from "firebase/firestore";

const db = getFirestore(firebaseApp);


export default async function eliminarProductoHome(producto){
    const coleccionRef = collection(db, "productos");
    const docuRef = doc(coleccionRef, producto.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
}