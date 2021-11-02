import React from "react";
import TextBox from "./../TextBox/TextBox";
import "./Registro.css";
import Boton from "./../Botones/bontones";


const Registro = () => {
    return (
        <div className="App">

            <h1 className="o-registro-titulo" >Registro</h1>

            <div className="row">
                <div className="col" />

                <div className="col-3 o-izq">

                    <TextBox palabraPorDefecto="Nombres" titulo="Nombres *" />
                    <br />
                    <TextBox palabraPorDefecto="Tipo de identificación..." titulo="Tipo de identificación *" />
                    <br />
                    <TextBox palabraPorDefecto="Departamento" titulo="Departamento *" />
                    <br />
                    <TextBox palabraPorDefecto="Correo electrónico" titulo="Correo electrónico *" />
                    <br />
                    <TextBox palabraPorDefecto="Contraseña" titulo="Contraseña *" />
                </div>

                <div className="col-3">
                    <TextBox palabraPorDefecto="Apellidos" titulo="Apellidos *" />
                    <br />
                    <TextBox palabraPorDefecto="Número de identificación" titulo="Número de identificación *" />
                    <br />
                    <TextBox palabraPorDefecto="Dirección" titulo="Direccion/Ubicación *" />
                    <br />
                    <TextBox palabraPorDefecto="Celular" titulo="Celular *" />
                    <br />
                    <TextBox palabraPorDefecto="Confirmar Contraseña" titulo="Confirmar Contraseña *" />
                </div>

                <div className="col" />

            </div>

            <div className="form-check o-check" >
                <input className="form-check-input o-espacio" type="checkbox" value="" id="flexCheckDefault" />
                <p>Acepto los terminos y condiciones y aoutorizo el tratamiento de datos personales.</p>
            </div>


            <Boton texto="¡Comienza ahora!" />

        </div>
    );







}

export default Registro;