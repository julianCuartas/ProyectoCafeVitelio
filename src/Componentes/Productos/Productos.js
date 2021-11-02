import React from 'react';
import "./Productos.css";


import Footer from "./../Footer/Footer";
import Header from "./../Header/Header";
import ListaProductos from "./ListaProductos";

//imagenes
import ProductoUni from "./ProductoUni/ProductoUni";
import { Link } from 'react-router-dom';
// import CafeNatural from "./../../Imagenes/vitelio-natural.png"
// import CafeHoney from "./../../Imagenes/vitelio-honey.png"
// import CafeSuave from "./../../Imagenes/vitelio-suave.png"
// import Galletas from "./../../Imagenes/Galletas.png"
// import Dulce from "./../../Imagenes/dulce-cafe.png"

const Productos = function () {


    return (
        <div className="App">
            <div>
                <Header />
            </div>
            <div className="o-fondo-productos">

                <h1 className=" o-titulo-Productos">Productos</h1>

            </div>
            <div className="o-productos">

                {
                    ListaProductos.map ( Listado => (
                        
                      <ProductoUni  key={Listado.id} ids={Listado.id} imagen={Listado.foto} titulo={Listado.nombre} precio={Listado.precio} link="/ProductoDetalle"  />
                      
                    ))

                }
            </div>

            <Footer />
        </div>

    );
}

export default Productos;