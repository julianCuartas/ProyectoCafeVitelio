import React from "react";
import "./Unidad.css";

const Unidad = function ({ Title, Precio }) {
    return (
        <div className="o-container-unidad">
            <div className="row o-xd">
                <div className="col-8">
                    <p className="iz">{Title}</p>
                </div>
                <div className="col-4">
                    <p className="der">{Precio}</p>
                </div>
            </div>
        </div>
    );
}

export default Unidad;