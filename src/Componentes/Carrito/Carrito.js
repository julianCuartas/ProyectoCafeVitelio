import React from 'react';
import "./Carrito.css";
import { Link } from "react-router-dom";

import ProductoCarrito from "./ProductoCarrito/ProductoCarrito"
import Bonton from "./../Botones/bontones"
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"

import {useStateValue} from "../../StateProvider";

import Total from "./Total";
const Carrito = function () {

    const [{basket}, dispatch] = useStateValue();

  

 

    return (
        <div className="App">

            <Header />

            <div className="o-carrito-space">
                {/* Parte de arriba */}
                <div className="o-titulo-carrito">
                    <div className="col-md-6">
                        <p>Producto</p>
                    </div>
                    <div className="col-md-2">
                        <p>Precio</p>
                    </div>
                    <div className="col-md-2">
                        <p>Cantidad</p>
                    </div>
                    <div className="col-md-2">
                        <p>Subtotal</p>
                    </div>
                </div>


                {/* Parte del medio */}
                

                {
                    basket?.map( (item) => (
                        
                            <ProductoCarrito key={item.id} tipo={item.molienda} imagen={item.imagen} titulo={item.nombreProducto} precio={item.precio} peso={item.peso} ctnr={item.cantidad}/>
                      
                    ))
                   
                }
              
            



                    {/* <ProductoCarrito imagen={CafeNatural} precio="$30.000" subtotal="$30.000" titulo="Café Vitelio Natural" tipo="Tipo de molienda: Fina" peso="Peso neto(gr): 200 " />
                    <ProductoCarrito imagen={CafeNatural} precio="$30.000" subtotal="$30.000" titulo="Café Vitelio Natural" tipo="Tipo de molienda: Fina" peso="Peso neto(gr): 200 " /> */}

           

               



                {/* Parte de abajo */}
                <div className="o-final-carrito">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                        <Link to="/FinalizarCompra"><Bonton texto="Ir a pagar" /> </Link>
                        
                    </div>
                    <div className="col-md-3 o-total-carrito" >


                       
<Total/>


                        <div className="col-md-12 o-txt-envio-carrito">
                            <p>El costo del envío se calcula en el momento de finalizar la compra</p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    );
}

export default Carrito;