
import { useState } from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/acceso.css";
import { useNavigate } from "react-router-dom";
const Acceso =  () =>{
    const nav = useNavigate();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const onAcceso =async () => {
        const url = "http://localhost:4000/Registrarse/unirse";
        const response  = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
          
                Email: correo,
                Contraseña: password
             
            
            }),
           
        });
        if (response.ok){
            nav("/categorias");
        }

        if(!response.ok){
            const mensaje = await response.json();
            alert(mensaje);
        }
        else{
            alert ("Usuario registrado correctamente");
            
        }
    }
    
return(
    <div className="contenedor">
        <div className="titulo">Enseña.Me LSM</div>
        <div className="subtitulo1">iniciar sesion</div>
        <div><img src={logotipo} className="logo" /></div>
        <div>
        <input
            type="text"
            placeholder="Ingresa tu correo electronico"
            className="caja-correo"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)}/>
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
                    <button className="boton-ingresar" onClick={()=> onAcceso() }>Ingresar</button>
                    </div>
                    <div className="otros-botons">
                        <a href="/registro" className="link-registro">Registrarse</a>
                        <a href="/recuperar-password" className="link-password">Olvide mi Contraseña</a>
                        </div>
            </div>
                             
                )
            }

export default Acceso 





