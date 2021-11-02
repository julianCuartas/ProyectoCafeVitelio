import React from "react";
import "./Tarjeta.css";
import Img from "./../Img/Img";
import Imagen1 from "./../../../Imagenes/IMG_2396.jpg";
import Imagen2 from "./../../../Imagenes/Cafetales.jpg";

const Tagerta = function () {
    return (
        <div className ="o-targetas">
            <div className="col-5">
                <Img imagen={Imagen1} />
            </div>
            <div className="col-5">
                <Img imagen={Imagen2} />
            </div>
        </div>
    )
}

export default Tagerta;