import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/registro.css";

const Registro = () =>{
    
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const onRegistrar = async () => {
        const url = "http://localhost:4000/Registrarse/unirse";
        const response  = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                Nombre: nombre,
                Email: correo,
                Contraseña: password,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            const mensaje = await response.json();
            alert(mensaje);
        }
        else{
            alert ("Usuario registrado correctamente");
            navigate("/");
        }
        

    }

    
return(
    <div className="contenedor">
        <div className="titulo">Enseña.Me LSM</div>
        <div className="subtitulo1">Registrarse</div>
        <div><img src={logotipo} className="logo" /></div>
        <div>
        <input 
            type="text"
            placeholder="Ingresa tu correo electronico"
            className="caja-correo"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)}/>
            </div>

            <div>
        <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="caja-correo"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}/>
            </div>

            <div className="agrupador-password">
            <div>Contraseña</div>
            <div>
                <input
                type="password"
                placeholder="Password" 
                className="caja-password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                </div>
                </div>
                <div className="agrupador-boton">
                    <button className="boton-ingresar" onClick={()=> onRegistrar() }>Registrarse</button>
                    </div>
                    <div className="otros-botons">
                      
                        <a href="/recuperar-password" className="link-password">Olvide mi Contraseña</a>
                        </div>
            </div>
                             
                )
        }
    
        export default Registro

