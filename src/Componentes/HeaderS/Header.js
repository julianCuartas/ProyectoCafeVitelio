import React, { Component } from "react";
import { Link } from "react-router-dom";

import Boton from "./../Botones/bontones";
import "./Header.css";
import swal from "sweetalert";

import FondoLogo from "./../../Imagenes/FormaLogo-02.png";
import Logo from "./../../Imagenes/Logo-02-02.png";
import Carrito from "./../../Imagenes/CarritoCompra.png";
import Cookies from 'universal-cookie';

const cookies = new Cookies();



class header extends Component {

    componentDidMount() {
        var parcial = cookies.get('username');
        console.log(parcial);
        if (!cookies.get('username')) {
            document.getElementById("2").classList.add('o-mostrar');
        } else {
            document.getElementById("2").classList.add('o-ocultarS');
        }
    }

    mostrarAlert() {
        swal({
            title: "Confirmación",
            text: "¿Esta seguro que quiere cerrar sesion?",
            icon: "warning",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if (respuesta) {
                swal({
                    text: "Se cerro sesion correctamente",
                    icon: "success",
                    timer: "50000"
                })
                this.cerrarSesion();
            }
        })
    }

    cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('apellidoP', { path: "/" });
        cookies.remove('apellidoM', { path: "/" });
        cookies.remove('nombre', { path: "/" });
        cookies.remove('username', { path: "/" });
        cookies.remove('contraseña', { path: "/" });
        window.location.href = './../../';
    }

    // function ocultar() {
    //     document.getElementById('obj1').style.display = 'none';
    // }

    // function mostrar() {
    //     document.getElementById('obj2').style.display = 'block';
    // }
    render() {
        console.log('id: ' + cookies.get('id'));
        console.log('apellidoP: ' + cookies.get('apellidoP'));
        console.log('apellidoM: ' + cookies.get('apellidoM'));
        console.log('nombre: ' + cookies.get('nombre'));
        console.log('username: ' + cookies.get('username'));
        console.log('contraseña: ' + cookies.get('contraseña'));


        return (
            <div id="2" className="o-header">
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
                    <Link to="/Carrito"> <img className="o-carrito" src={Carrito} alt="Logo" /></Link>

                    <p className="btn o-color" onClick={() => this.mostrarAlert()}>Cerrar Sesion</p>

                    {/* <Boton onClick={()=>this.cerrarSesion} texto="Cerrar Sesion" />  */}

                    {/* <select onchange="Calculate()" id="Cuanta" class="o-dropDownlist">
                        <option  className="o-centra">Mi cuenta</option>
                        <option onClick={()=>this.cerrarSesion()} >Cerrar secion</option>
                    </select>
     */}
                </div>
            </div>
        );
    }

}

export default header;