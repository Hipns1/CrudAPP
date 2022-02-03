import React, { useState } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import firebaseApp from "./firebase/credenciales";
import {getAuth, onAuthStateChanged} from "firebase/auth";

const auth = getAuth(firebaseApp);

function App(){

    const [user, setUser] = React.useState(null);

    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            setUser(usuarioFirebase);
        }else{
            setUser(null);
        }
    });

    return <> { user ? <Home user={user}/> : <Login /> } </>
}

export default App; 