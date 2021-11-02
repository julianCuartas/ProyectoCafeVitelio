import React from "react";
import "./botones.css";

const Boton = ({texto}) => {
    return (
        <div>
            <p className="btn o-color">{texto}</p>
        </div>
    );
}

export default Boton;