import React from "react";
import "./../Inicio/Inicio.css";
import { Link } from "react-router-dom";

import img1 from "./../../Imagenes/vitelio-natural.png";
import img2 from "./../../Imagenes/vitelio-honey.png"
import img3 from "./../../Imagenes/vitelio-suave.png"

import Header from "./../Header/Header";
import Targeta from "./TargetaProducotsResumen/TargetaResumen";
import Boton from "./../Nosotros/Boton/botonos";
import Footer from "./../Nosotros/Footer/footer";


import mer from "./../../Imagenes/dulce-cafe.png";
import gall from "./../../Imagenes/Galletas.png";


const inicio = function () {
    return (
        <div className="App">
            <Header />


            <div className="o-baner-img o-baner">
                <h1 className="o-tittle o-tittle-margen">¡Bienvenidos!</h1>
                <h7 className="o-text o-text-margen col-3">Estás en la página oficial de Café Vitelio donde podrás encontrar nuestra tienda virtual e información relacionada a nuestra historia y tradición familiar.</h7>
            </div>
            <div className="o-margen">
                <div>
                    <h1 className="o-tittle2">Destacados</h1>
                </div>
                <div className="o-destacados col-9">
                    <Targeta imagen={img1} nombreProducto={"Café vitelio natural"} />
                    <Targeta imagen={img2} nombreProducto={"Café Vitelio Honey Rojo"} />
                    <Targeta imagen={img3} nombreProducto={"Café Vitelio Suave Lavado"} />
                </div>
                <div className="o-boton">
                    <Link to="/Productos"><Boton texto="Ver más" /></Link>

                </div>
            </div>
            <div className="o-nosotros o-nosotros-img o-margen">
                <div>
                    <h1 className="o-tittle">Nosotros</h1>
                </div>
                <div className="o-nosotros-texto o-margen ">
                    <h6 className="o-text col-6">En este apartado encontrarás un poco de nuestra historia familiar, ademas de nuestras motivaciones para salir a trabar día a día.</h6>
                </div>
                <div className="o-margen">
                    <Link to="/Nosotros"><Boton texto="Ver más" /></Link>


                </div>
            </div>
            <br />
            <br />
            <br />
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default inicio;