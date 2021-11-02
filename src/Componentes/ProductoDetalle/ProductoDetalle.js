import React, { Component } from 'react';
import "./ProductoDetalle.css";

import Detalle from "./Detalle/Detalle"
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"

//Imagenes
import CafeDetalle from "./../../Imagenes/vitelio-natural_SinFondo.png"



const ProductoDetalle = function () {


    

    return (
        <div className="o-productoDetalle">

            <Header />

            <div>
                <Detalle  id={2} imagen={CafeDetalle}  titulo="Café Vitelio Natural" precio="30000" descripcion="Café Vitelio natural es el producto indicado para las personas expertas en el mundo del café, a su vez es el indicado para las pesonas que quieren probar caracteristicas nuevas y diferentes." />
            
            
            </div>

            <Footer />

        </div>
    );
}

export default ProductoDetalle;