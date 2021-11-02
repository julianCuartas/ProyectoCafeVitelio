import React, { Component } from "react";

import { Link } from "react-router-dom";

import Boton from "./../Botones/bontones";
import "./Header.css";

import FondoLogo from "./../../Imagenes/FormaLogo-02.png";
import Logo from "./../../Imagenes/Logo-02-02.png";
import Carrito from "./../../Imagenes/CarritoCompra.png";
import {useStateValue} from "./../../StateProvider";

import Cookies from 'universal-cookie';

const cookies = new Cookies();





const Header = function(){
    const [{basket}, dispatch] = useStateValue();

    function componentDidMount() {
        var parcial = cookies.get('username');
        console.log(parcial);
        if (cookies.get('username')) {
            document.getElementById("1").classList.add('o-ocultar');
        } else {
            // document.getElementById("2").classList.add('o-ocultar');
        }
    }



    return (
        <div className="o-header">
            {/* <img /> */}
            <div className="col">

                <div className="o-logo-sup">



                    <img className="o-logo-fondo" src={FondoLogo} alt="LogoFondo" />
                    <img className="o-logo-vitelio" src={Logo} alt="Logo" />
                </div>

            </div>


            <div className="col-4 o-medio">
                
                <Link className="o-header-nav" to="/">    Inicio   </Link>
                <Link className="o-header-nav" to="/Productos">    Productos   </Link>
                <Link className="o-header-nav" to="/Nosotros">    Nosotros   </Link>
                <p className="o-header-nav" href="/">Ayuda</p>
            </div>

            <div className="col-4 o-btn-iz">
<p className="o-numero-carrito">{basket?.length}</p>

                <Link to="/Carrito"> <img className="o-carrito" src={Carrito} alt="Logo" /></Link>

                <Link to="/InicioS"><Boton texto="Iniciar sesión" /> </Link>

            </div>
        </div>
    );


}

export default Header;