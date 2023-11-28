import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/recuperar.css";

const Recuperar = () =>{
    const navigate=useNavigate();
    const [correo, setCorreo] = useState("");
    const onRecuperar =async () =>{
        if(correo==""){
            alert ("ingrese un correo");
            return;
    }
        const url = "http://localhost:4000/Contraseña/recuperar";
        const response  = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
          
                Email: correo
             
            
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
            alert ("se envio el correo");
            navigate("/");
        }
    }
return(
    <div className="contenedor">
        <div className="titulo">Enseña.Me LSM</div>
        <div className="subtitulo">¿no recuerdas tu contraseña?</div>
        <div className="mensaje">ingresa tu email y te ayudaremos</div>


        <div><img src={logotipo} className="logo" /></div>
        <div>
        <input
            type="text"
            placeholder="Ingresa tu correo electronico"
            className="caja-correo"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)}/>
            </div>

                <div className="agrupador-boton">
                    <button className="boton-ingresar" onClick={()=> onRecuperar() }>Ingresar</button>
                    </div>
                    <div className="otros-botons">
                      
                        </div>
            </div>
                             
                )
            }

export default Recuperar





