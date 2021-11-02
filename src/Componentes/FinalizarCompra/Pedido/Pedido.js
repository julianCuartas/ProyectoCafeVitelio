import React from "react";
import "./Pedido.css";

import Unidad from "./Unidad/Unidad";

const Pedido = function () {
    return (
        <div className="o-container-pedido">
            <div className="row o-titulo">
                <div className="col-12">
                    <h4>Tu pedido</h4>
                </div>
            </div>

            <div className="row o-subtitulo">
                <div className="col-6">
                <h5 className="iz">Producto</h5>
                </div>
                <div className="col-6">
                <h5 className="der">Subtotal</h5>
                </div>
            </div>

            <div className="o-unidades">
                <div className="row">
                    <div className="col-12">
                        <Unidad Title="Café Vitelio Natural" Precio="60.000" />
                    </div>
                </div>
    
            </div>

            <div className="o-extras">
                <div className="row">
                    <div className="col-12 negrita">
                        <Unidad Title="Subtotal" Precio="60.000" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Unidad Title="Envio" Precio="10.000" />
                    </div>
                </div>
            </div>

            <div className="o-total">
                <div className="row">
                    <div className="col-12">
                        <Unidad Title="Total" Precio="70.000" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pedido;