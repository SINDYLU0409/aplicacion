import Modal from "react-bootstrap/esm/Modal";
import Buttom from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";

interface Props{
    mostrar: boolean,
    onCerrarVentana: () => void,
    onCrearCategoria: (categoria: DatosCategoria) => void
}
export interface DatosCategoria{
    Nombre: string,
    Icono: string
}
const categoriaVacia = {
    Nombre: "",
    Icono: ""
};



const AgregarCategoria = ({mostrar, onCerrarVentana, onCrearCategoria}: Props) =>{
    const [categoria , setCategoria] = useState<DatosCategoria>(categoriaVacia);
    const dataChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoria({
            ...categoria,
            [e.target.id] : e.target.value
        });
    }
    useEffect(()=>{
        setCategoria(categoriaVacia);
    }, [mostrar]);


return (
    <Modal show={mostrar} onHide={onCerrarVentana}>
    <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="col-12">
           <div className="mb-3">
            <label>Nombre</label>
            <input
            type="text"
            id="Nombre"
            className="form-control"
            value={categoria.Nombre}
            onChange={dataChanged}
           />
           </div>
        </div>
        <div className="col-12">
            <div className="mb-3">
                <label>Icono</label>
                <input
                type="text"
                id="Icono"
                className="form-control"
                value={categoria.Icono}
                onChange={dataChanged}
                />
                </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Buttom variant="secondary" onClick={onCerrarVentana}>
                        Cerrar
                        </Buttom>
                        <Buttom variant="primary"onClick={() =>onCrearCategoria(categoria)}>
                            Guardar
                            </Buttom>
                            </Modal.Footer>
                            </Modal>
     )
}
export default AgregarCategoria;

