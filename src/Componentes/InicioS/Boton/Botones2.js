import React from "react";
import "./../Boton/Botones2.css"
const Boton = ({texto}) => {
    return (
        <div>
            <p className="btn o-color2">{texto}</p>
        </div>
    );
}

export default Boton;