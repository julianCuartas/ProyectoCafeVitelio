import React from 'react';
import "./../Nosotros/Nosotros.css"
import Footer from "./Footer/footer";
import Baners from "./Baner/Baner";
import Informacion from "./Informacion/Informacion";
import Tarjeta from "./targetas/Tarjeta";
import Header from "./../Header/Header";

const Nosotros = function () {
    return (
        <div>
            <Header />
            <Baners />
            <Informacion />
            <br />
            <Tarjeta />
            <br />
            <Footer />
        </div>
    )
}

export default Nosotros;