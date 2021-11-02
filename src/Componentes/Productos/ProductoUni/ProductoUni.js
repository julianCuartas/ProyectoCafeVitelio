import React from 'react';
import "./ProductoUni.css";
import { Link } from "react-router-dom";
//imagenes



const ProductoUni = function ({ids,imagen, titulo, precio, link}) {





    return (
        <div className="col-md-4 o-tarjeta-productoUni" >
            <Link to={link}> <img className="o-img-productoUni" src={imagen}></img></Link>
            <p className="o-titulo-productoUni">{titulo}</p>
            <p className="o-precio-productoUni">$ {precio}</p>
            
          
        </div>
    );
}

export default ProductoUni;