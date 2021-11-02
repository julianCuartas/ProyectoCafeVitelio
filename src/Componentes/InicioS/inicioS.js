import React, { Component } from "react";
import "./../InicioS/inicioS.css";
import imgF from "./../../Imagenes/productos-fondo.jpg"
import LogoVitelio from "./../../Imagenes/Logo-02-02.png"


import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

class inicioS extends Component {
    state = {
        from: {
            username: '',
            contraseña: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            from: {
                ...this.state.from,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.from);
    }

    iniciarSesion = async () => {
        await axios.get(baseUrl, { params: { username: this.state.from.username, contraseña: md5(this.state.from.contraseña) } })
            .then(response => {
                return response.data;
            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    cookies.set('id', respuesta.id, { path: "/" });
                    cookies.set('apellidoP', respuesta.apellidoP, { path: "/" });
                    cookies.set('apellidoM', respuesta.apellidoM, { path: "/" });
                    cookies.set('nombre', respuesta.nombre, { path: "/" });
                    cookies.set('username', respuesta.username, { path: "/" });
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellidoP}`);
                    window.location.href = "./../../";
                } else {
                    alert("El nombre de usuario o contraseña son incorretos")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="o-inicioS">
                <div className="col-6 ">
                    <img className="o-imgF" src={imgF}></img>
                    <img className="o-imgL" src={LogoVitelio}></img>
                </div>
                <div className="col-6">
                    <div className="o-der1">

                    </div>
                    <div className="o-der2">
                        <div >
                            <h1> Iniciar sesión</h1>
                        </div>
                        <div className=" o-campo">
                            {/* <TextBox className="o-correo" titulo="Correo electrónico" nombre="username" palabraPorDefecto="example@ejemplo.com"  /> */}
                            <p className="o-titulo">Nombre de usuario</p>
                            <input id="txtNombre" type="text" className="o-textbox" name="username" placeholder="EjemploUsuario" onChange={this.handleChange} />
                            <br />
                            {/* <TextBox className="o-correo" titulo="Contraseña" nombre="contraseña" palabraPorDefecto="********" onchange={this.handleChange} /> */}
                            <p className="o-titulo">Contraseña</p>
                            <input id="txtNombre" type="password" className="o-textbox" name="contraseña" placeholder="**************" onChange={this.handleChange} />
                            <a href="#">¿Olvido su contraseña?</a>
                        </div>
                        <div className="o-boton">
                            {/* <Boton texto="Ingresar" /> */}
                            <p className="btn o-color" onClick={() => this.iniciarSesion()}>Ingresar</p>
                        </div>

                    </div>

                </div>
            </div>
        );
    }

}

export default inicioS;