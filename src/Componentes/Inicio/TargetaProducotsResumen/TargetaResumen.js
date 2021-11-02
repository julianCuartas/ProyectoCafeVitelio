import React from "react";
import "./../TargetaProducotsResumen/TargetaResumen.css";

const tarjetaProductoResume = ({ imagen, nombreProducto }) => {
    return (
        <div className="o-tarjeta">
            <img className="o-producto-resume" src={imagen} alt="Producto" />
            <br /><br />
            <p className="o-texto">{nombreProducto}</p>

        </div>
    );



}

export default tarjetaProductoResume;