import React from 'react';
import "./Footer.css";

//imagenes
import LogoFooter from "./../../../Imagenes/Logo-02-02.png"
import RedesSociales from "./../../../Imagenes/RedesSociales.png"

const Footer = function () {
    return (
        <div className="o-footer ">

            <div className="col-md-4">
                <img className="o-logo-footer" src={LogoFooter} alt="Logo"></img>
            </div>
            <div className="col-md-4">
                <p className="o-titulo-footer">Contáctenos:</p>
                <p className="o-texto-footer">+57 314 773 6812</p>
                <p className="o-texto-footer">cafeviteliosevilla@gmail.com</p>
                <p className="o-texto-footer">Sevilla Valle del Cauca</p>
            </div>
            <div className="col-md-4">
                <img className="o-img-redesSociales" src={RedesSociales} alt="Redes"></img>
            </div>
            <div className="col-md-4 o-copyRight-footer">
                <hr ></hr>
                <p>Copyright © 2020, All rights reserved </p>
            </div>

        </div>
    );
}

export default Footer;