import React, { useState } from 'react';
import firebaseApp from '../firebase/credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

//Importar estilos CSS
import styles from "../styles/styleLogin.module.css";
import logo from "../styles/images/logo_white_large.png";
import fondo from "../styles/images/fondo.jpg";
import logoMovil from "../styles/images/logo_white_blue.png";


const auth = getAuth(firebaseApp);

const Login = () => {

    const [isRegistrando, setIsRegistrando] = useState(false);

    async function registrarUsuario (email, password) {

        const infoUsuario = await createUserWithEmailAndPassword(auth, email, password)
        .then((usuarioFirebase) => {
            return usuarioFirebase
        } );
        console.log(infoUsuario);
    }

    function submitHandler(e) {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        if (isRegistrando) {
            registrarUsuario(email, password);
        }else{
            signInWithEmailAndPassword(auth, email, password);
        }
    } 


    return ( 


        
        <div className={styles.contenedorLogin}>

            <div className={styles.contenedorLogoMovil}>
                <img src={logoMovil} alt="" />
            </div>

            <div className={styles.contenedorImage}>
                <img src={fondo} alt=''/>
                
                <div className={styles.contenedorLogo}>
                    <img src={logo} alt="" />
                </div>
                <h1>BIENVENIDO</h1>
                <h2>Inicie sesión para acceder</h2>
                
            </div>
            

            <div className={styles.contenedorForm}>
                <h1 className={styles.textoInicio}> { isRegistrando ? "Registrate" : "Inicia sesión" } </h1>
                <h2 className={styles.textoExplica}>Esta es una version de prueba de inicio de sesion y CRUD,
                    diseñado por Jesus David Perez Ferrer. Por favor inicie sesión.
                    para continuar al CRUD.
                </h2>
                
                <form onSubmit={submitHandler} className={styles.form}>
                    
                    <label className={styles.divCorreo}>
                        <input type="email" id="email" placeholder="Usuario/Email" 
                                className={styles.inputCorreo}/>
                    </label>
                
                    <label className={styles.divContraseña}>
                        <input type="password" id="password" placeholder="Contraseña"
                                className={styles.inputContraseña} />
                    </label>
                
                    <input 
                        className={styles.botonIniciar}
                        type="submit"
                        value={isRegistrando ? "Registrar" : "Iniciar sesión"} 
                    />
                
                </form>
                
                <button onClick={() => setIsRegistrando(!isRegistrando)} className={styles.botonRegistrar}>
                    {isRegistrando ? "Ya tienes una cuenta?" : "Quiero registrarme"}
                </button>
            </div>

            <div className={styles.contenedorFondoMovil}>
            </div>

        </div>
    )
}

export default Login;
